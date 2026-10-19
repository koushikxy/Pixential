const bcrypt = require('bcryptjs');
const { prisma } = require('../config/db');
const { loadClient } = require('../middleware/auth');
const { HttpError, required, pick } = require('../utils/http');

const DEFAULT_MILESTONES = [
  { title: 'Discovery & Strategy', description: 'Market research and competitor analysis.' },
  { title: 'UI/UX Design', description: 'Wireframes and high-fidelity mockups.' },
  { title: 'Web Development', description: 'Building and testing the website.' },
  { title: 'Launch & SEO Setup', description: 'Final testing, domain setup and indexing.' },
];

const detail = {
  user: { select: { id: true, email: true, name: true } },
  locations: true,
  milestones: { orderBy: { position: 'asc' } },
  files: { orderBy: { createdAt: 'desc' } },
};

const cleanLocations = (locations = []) =>
  locations
    .filter((l) => l.address && l.city)
    .map(({ address, city, state = '', zip = '' }) => ({ address, city, state, zip }));

const accountData = async (account) => {
  if (!account?.email) return undefined;
  if (!account.password || account.password.length < 8) {
    throw new HttpError(400, 'Portal password must be at least 8 characters');
  }
  return {
    create: {
      email: account.email.trim().toLowerCase(),
      name: account.name || null,
      password: await bcrypt.hash(account.password, 10),
      role: 'CLIENT',
    },
  };
};

const getClients = async (req, res) => {
  const clients = await prisma.client.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      user: { select: { email: true } },
      locations: true,
      milestones: { orderBy: { position: 'asc' } },
      _count: { select: { files: true } },
    },
  });
  res.json(clients);
};

const getClient = async (req, res) => {
  await loadClient(req, req.params.id);
  res.json(await prisma.client.findUnique({ where: { id: req.params.id }, include: detail }));
};

const getMyClient = async (req, res) => {
  const client = await prisma.client.findUnique({ where: { userId: req.user.id }, include: detail });
  if (!client) throw new HttpError(404, 'No project is linked to this account yet');
  res.json(client);
};

const createClient = async (req, res) => {
  required(req.body, ['name']);
  const client = await prisma.client.create({
    data: {
      ...pick(req.body, ['name', 'phone', 'website']),
      user: await accountData(req.body.account),
      locations: { create: cleanLocations(req.body.locations) },
      milestones: { create: DEFAULT_MILESTONES.map((m, position) => ({ ...m, position })) },
    },
    include: detail,
  });
  res.status(201).json(client);
};

const updateClient = async (req, res) => {
  const existing = await loadClient(req, req.params.id);
  const data = pick(req.body, ['name', 'phone', 'website']);
  if (req.body.locations) {
    data.locations = { deleteMany: {}, create: cleanLocations(req.body.locations) };
  }
  if (req.body.account?.email && !existing.userId) data.user = await accountData(req.body.account);

  res.json(await prisma.client.update({ where: { id: req.params.id }, data, include: detail }));
};

const deleteClient = async (req, res) => {
  const client = await loadClient(req, req.params.id);
  await prisma.client.delete({ where: { id: client.id } });
  if (client.userId) await prisma.user.delete({ where: { id: client.userId } });
  res.status(204).end();
};

module.exports = { getClients, getClient, getMyClient, createClient, updateClient, deleteClient };
