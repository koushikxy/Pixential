const { prisma } = require('../config/db');
const { HttpError, required } = require('../utils/http');
const mail = require('../utils/mailer');

const STATUSES = ['NEW', 'CONTACTED', 'WON', 'LOST'];

const createLead = async (req, res) => {
  required(req.body, ['firstName', 'lastName', 'email', 'message']);
  if (!/^\S+@\S+\.\S+$/.test(req.body.email)) throw new HttpError(400, 'Invalid email');

  const { firstName, lastName, email, budget, message } = req.body;
  const lead = await prisma.lead.create({
    data: {
      firstName: String(firstName).slice(0, 100),
      lastName: String(lastName).slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 200),
      budget: budget ? String(budget).slice(0, 100) : null,
      message: String(message).slice(0, 5000),
    },
  });

  mail.send({
    to: process.env.NOTIFY_EMAIL,
    replyTo: lead.email,
    subject: `New lead: ${lead.firstName} ${lead.lastName}`,
    body: `<p><b>${mail.escape(`${lead.firstName} ${lead.lastName}`)}</b> (${mail.escape(lead.email)})${lead.budget ? ` - ${mail.escape(lead.budget)}` : ''}</p>
      <p style="white-space:pre-wrap">${mail.escape(lead.message)}</p>
      <p><a href="${process.env.FRONTEND_URL}/admin/leads">Open in admin</a></p>`,
  });
  mail.send({
    to: lead.email,
    subject: 'We got your message',
    title: `Thanks, ${mail.escape(lead.firstName)}!`,
    body: '<p>We have received your project details and will get back to you within 24 hours.</p><p>If anything is urgent, just reply to this email.</p>',
    replyTo: process.env.NOTIFY_EMAIL,
  });
  res.status(201).json({ message: 'Thanks, we will get back to you soon' });
};

const getLeads = async (req, res) => {
  res.json(await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } }));
};

const updateLead = async (req, res) => {
  if (!STATUSES.includes(req.body.status)) throw new HttpError(400, 'Invalid status');
  res.json(await prisma.lead.update({ where: { id: req.params.id }, data: { status: req.body.status } }));
};

const deleteLead = async (req, res) => {
  await prisma.lead.delete({ where: { id: req.params.id } });
  res.status(204).end();
};

const getStats = async (req, res) => {
  const [clients, activeProjects, newLeads, leads, files] = await Promise.all([
    prisma.client.count(),
    prisma.client.count({ where: { milestones: { some: { status: 'IN_PROGRESS' } } } }),
    prisma.lead.count({ where: { status: 'NEW' } }),
    prisma.lead.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
    prisma.file.findMany({ orderBy: { createdAt: 'desc' }, take: 5, include: { client: { select: { name: true } } } }),
  ]);

  const activity = [
    ...leads.map((l) => ({ type: 'lead', name: `${l.firstName} ${l.lastName}`, text: 'submitted the contact form', at: l.createdAt })),
    ...files.map((f) => ({ type: 'file', name: f.client.name, text: `got a new file: ${f.name}`, at: f.createdAt })),
  ]
    .sort((a, b) => b.at - a.at)
    .slice(0, 6);

  res.json({ clients, activeProjects, newLeads, activity });
};

module.exports = { createLead, getLeads, updateLead, deleteLead, getStats };
