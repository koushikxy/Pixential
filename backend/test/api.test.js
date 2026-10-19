const { test, before, after } = require('node:test');
const assert = require('node:assert');
const { execSync } = require('child_process');
const path = require('path');

process.env.NODE_ENV = 'test';
process.env.DATABASE_URL = 'file:./test.db';
process.env.JWT_SECRET = 'test-secret';

const root = path.join(__dirname, '..');
execSync('npx prisma db push --force-reset --skip-generate', { cwd: root, stdio: 'ignore', env: process.env });

const bcrypt = require('bcryptjs');
const app = require('../src/app');
const { prisma } = require('../src/config/db');

let server, base, adminToken, clientToken, clientId;

const api = async (method, url, { token, body, headers = {} } = {}) => {
  const isJson = body && !Buffer.isBuffer(body);
  const res = await fetch(base + url, {
    method,
    headers: {
      ...(isJson && { 'Content-Type': 'application/json' }),
      ...(token && { Authorization: `Bearer ${token}` }),
      ...headers,
    },
    body: isJson ? JSON.stringify(body) : body,
  });
  const text = await res.text();
  return { status: res.status, data: text && res.headers.get('content-type')?.includes('json') ? JSON.parse(text) : text };
};

before(async () => {
  await prisma.user.create({
    data: { email: 'admin@test.com', password: await bcrypt.hash('adminpass1', 10), role: 'ADMIN' },
  });
  server = app.listen(0);
  base = `http://localhost:${server.address().port}/api`;
});

after(async () => {
  server.close();
  await prisma.$disconnect();
});

test('rejects bad login and logs admin in', async () => {
  assert.equal((await api('POST', '/auth/login', { body: { email: 'admin@test.com', password: 'nope' } })).status, 401);
  const res = await api('POST', '/auth/login', { body: { email: 'admin@test.com', password: 'adminpass1' } });
  assert.equal(res.status, 200);
  assert.equal(res.data.user.role, 'ADMIN');
  adminToken = res.data.token;
});

test('public cannot register or list clients', async () => {
  assert.equal((await api('POST', '/auth/register', { body: { email: 'x@x.com', password: 'x', role: 'ADMIN' } })).status, 404);
  assert.equal((await api('GET', '/clients')).status, 401);
});

test('admin creates a client with a portal login', async () => {
  const res = await api('POST', '/clients', {
    token: adminToken,
    body: {
      name: 'Acme',
      locations: [{ address: '1 MG Road', city: 'Bangalore', state: 'KA', zip: '560001' }],
      account: { email: 'owner@acme.com', password: 'clientpass1' },
    },
  });
  assert.equal(res.status, 201);
  assert.equal(res.data.milestones.length, 4);
  assert.equal(res.data.locations.length, 1);
  clientId = res.data.id;

  const dup = await api('POST', '/clients', {
    token: adminToken,
    body: { name: 'Dup', account: { email: 'owner@acme.com', password: 'clientpass1' } },
  });
  assert.equal(dup.status, 409);
});

test('client sees only their own project', async () => {
  const login = await api('POST', '/auth/login', { body: { email: 'owner@acme.com', password: 'clientpass1' } });
  clientToken = login.data.token;
  assert.equal(login.data.user.clientId, clientId);

  assert.equal((await api('GET', '/clients/me', { token: clientToken })).data.name, 'Acme');
  assert.equal((await api('GET', '/clients', { token: clientToken })).status, 403);

  const other = await api('POST', '/clients', { token: adminToken, body: { name: 'Other' } });
  assert.equal((await api('GET', `/clients/${other.data.id}`, { token: clientToken })).status, 403);
});

test('admin updates milestone status', async () => {
  const { data } = await api('GET', `/clients/${clientId}`, { token: adminToken });
  const res = await api('PUT', `/milestones/${data.milestones[0].id}`, { token: adminToken, body: { status: 'IN_PROGRESS' } });
  assert.equal(res.data.status, 'IN_PROGRESS');
  assert.equal((await api('PUT', `/milestones/${data.milestones[0].id}`, { token: clientToken, body: { status: 'DONE' } })).status, 403);
});

test('client uploads, downloads and deletes a file', async () => {
  const up = await api('POST', `/clients/${clientId}/files`, {
    token: clientToken,
    body: Buffer.from('hello world'),
    headers: { 'Content-Type': 'text/plain', 'X-File-Name': encodeURIComponent('brief notes.txt') },
  });
  assert.equal(up.status, 201);
  assert.equal(up.data.name, 'brief notes.txt');

  const down = await api('GET', `/files/${up.data.id}/download`, { token: adminToken });
  assert.equal(down.data, 'hello world');

  assert.equal((await api('DELETE', `/files/${up.data.id}`, { token: clientToken })).status, 204);
});

test('contact form creates a lead that shows in admin stats', async () => {
  assert.equal((await api('POST', '/leads', { body: { firstName: 'A' } })).status, 400);
  const res = await api('POST', '/leads', {
    body: { firstName: 'Ravi', lastName: 'K', email: 'ravi@shop.in', budget: 'Starter (₹25,000)', message: 'Need a site' },
  });
  assert.equal(res.status, 201);

  const leads = await api('GET', '/leads', { token: adminToken });
  assert.equal(leads.data.length, 1);
  await api('PUT', `/leads/${leads.data[0].id}`, { token: adminToken, body: { status: 'CONTACTED' } });

  const stats = await api('GET', '/stats', { token: adminToken });
  assert.deepEqual([stats.data.clients, stats.data.activeProjects, stats.data.newLeads], [2, 1, 0]);
  assert.equal(stats.data.activity[0].type, 'lead');
});

test('forgot password gives a one-time reset link', async () => {
  const unknown = await fetch(`${base}/auth/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'nobody@test.com' }),
  });
  assert.equal(unknown.status, 200);
  assert.equal(unknown.headers.get('x-test-token'), null);

  const res = await fetch(`${base}/auth/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'owner@acme.com' }),
  });
  const token = res.headers.get('x-test-token');
  assert.ok(token);

  assert.equal((await api('POST', '/auth/reset-password', { body: { token: 'bad', password: 'resetpass1' } })).status, 400);
  assert.equal((await api('POST', '/auth/reset-password', { body: { token, password: 'resetpass1' } })).status, 200);
  assert.equal((await api('POST', '/auth/reset-password', { body: { token, password: 'again12345' } })).status, 400);

  const login = await api('POST', '/auth/login', { body: { email: 'owner@acme.com', password: 'resetpass1' } });
  assert.equal(login.status, 200);
  clientToken = login.data.token;
});

test('password change works and deleting a client removes its login', async () => {
  assert.equal((await api('PUT', '/auth/password', { token: clientToken, body: { currentPassword: 'wrong', newPassword: 'newpass123' } })).status, 400);
  assert.equal((await api('PUT', '/auth/password', { token: clientToken, body: { currentPassword: 'resetpass1', newPassword: 'newpass123' } })).status, 200);

  assert.equal((await api('DELETE', `/clients/${clientId}`, { token: adminToken })).status, 204);
  assert.equal((await api('POST', '/auth/login', { body: { email: 'owner@acme.com', password: 'newpass123' } })).status, 401);
});
