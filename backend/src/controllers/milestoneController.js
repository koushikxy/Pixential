const { prisma } = require('../config/db');
const { HttpError, required, pick } = require('../utils/http');
const mail = require('../utils/mailer');

const STATUSES = ['PENDING', 'IN_PROGRESS', 'DONE'];
const LABELS = { PENDING: 'Pending', IN_PROGRESS: 'In progress', DONE: 'Done' };

const parse = (body) => {
  const data = pick(body, ['title', 'description', 'status', 'position']);
  if (data.status && !STATUSES.includes(data.status)) throw new HttpError(400, 'Invalid status');
  if (body.dueDate !== undefined) data.dueDate = body.dueDate ? new Date(body.dueDate) : null;
  return data;
};

const createMilestone = async (req, res) => {
  required(req.body, ['title']);
  const position = await prisma.milestone.count({ where: { clientId: req.params.id } });
  const milestone = await prisma.milestone.create({
    data: { position, ...parse(req.body), clientId: req.params.id },
  });
  res.status(201).json(milestone);
};

const updateMilestone = async (req, res) => {
  const before = await prisma.milestone.findUnique({ where: { id: req.params.id } });
  if (!before) throw new HttpError(404, 'Milestone not found');
  const milestone = await prisma.milestone.update({
    where: { id: before.id },
    data: parse(req.body),
    include: { client: { include: { user: true } } },
  });

  const user = milestone.client.user;
  if (user && milestone.status !== before.status && milestone.status !== 'PENDING') {
    mail.send({
      to: user.email,
      subject: `Project update: ${milestone.title} is ${LABELS[milestone.status].toLowerCase()}`,
      title: 'Your project has moved forward',
      body: `<p><b>${mail.escape(milestone.title)}</b> is now <b>${LABELS[milestone.status]}</b>.</p>
        <p><a href="${process.env.FRONTEND_URL}/client">See your project timeline</a></p>`,
    });
  }

  const { client, ...data } = milestone;
  res.json(data);
};

const deleteMilestone = async (req, res) => {
  await prisma.milestone.delete({ where: { id: req.params.id } });
  res.status(204).end();
};

module.exports = { createMilestone, updateMilestone, deleteMilestone };
