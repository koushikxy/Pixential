const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { prisma } = require('../config/db');
const { HttpError, required } = require('../utils/http');
const mail = require('../utils/mailer');

const publicUser = ({ id, email, name, role, client }) => ({ id, email, name, role, clientId: client?.id || null });

const login = async (req, res) => {
  required(req.body, ['email', 'password']);
  const user = await prisma.user.findUnique({
    where: { email: req.body.email.trim().toLowerCase() },
    include: { client: true },
  });
  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    throw new HttpError(401, 'Invalid email or password');
  }

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, user: publicUser(user) });
};

const me = async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.user.id }, include: { client: true } });
  if (!user) throw new HttpError(404, 'User not found');
  res.json(publicUser(user));
};

const changePassword = async (req, res) => {
  required(req.body, ['currentPassword', 'newPassword']);
  if (req.body.newPassword.length < 8) throw new HttpError(400, 'New password must be at least 8 characters');

  const user = await prisma.user.findUnique({ where: { id: req.user.id } });
  if (!(await bcrypt.compare(req.body.currentPassword, user.password))) {
    throw new HttpError(400, 'Current password is incorrect');
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { password: await bcrypt.hash(req.body.newPassword, 10) },
  });
  res.json({ message: 'Password updated' });
};

const hash = (token) => crypto.createHash('sha256').update(token).digest('hex');

const forgotPassword = async (req, res) => {
  required(req.body, ['email']);
  const user = await prisma.user.findUnique({ where: { email: req.body.email.trim().toLowerCase() } });
  if (user) {
    const token = crypto.randomBytes(32).toString('hex');
    await prisma.user.update({
      where: { id: user.id },
      data: { resetToken: hash(token), resetExpires: new Date(Date.now() + 60 * 60 * 1000) },
    });
    mail.send({
      to: user.email,
      subject: 'Reset your Pixential password',
      body: `<p>Click the link below to set a new password. It works for 1 hour.</p>
        <p><a href="${process.env.FRONTEND_URL}/reset-password?token=${token}">Reset password</a></p>
        <p>If you did not ask for this, you can ignore this email.</p>`,
    });
    if (process.env.NODE_ENV === 'test') res.set('X-Test-Token', token);
  }
  res.json({ message: 'If that email has an account, a reset link is on its way' });
};

const resetPassword = async (req, res) => {
  required(req.body, ['token', 'password']);
  if (req.body.password.length < 8) throw new HttpError(400, 'Password must be at least 8 characters');

  const user = await prisma.user.findUnique({ where: { resetToken: hash(req.body.token) } });
  if (!user || user.resetExpires < new Date()) throw new HttpError(400, 'This reset link is invalid or has expired');

  await prisma.user.update({
    where: { id: user.id },
    data: { password: await bcrypt.hash(req.body.password, 10), resetToken: null, resetExpires: null },
  });
  res.json({ message: 'Password updated, you can log in now' });
};

module.exports = { login, me, changePassword, forgotPassword, resetPassword };
