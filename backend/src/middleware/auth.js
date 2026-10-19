const jwt = require('jsonwebtoken');
const { prisma } = require('../config/db');
const { HttpError } = require('../utils/http');

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access token missing' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(401).json({ message: 'Invalid or expired token' });
    req.user = user;
    next();
  });
};

const authorizeRole = (roles) => (req, res, next) => {
  if (!roles.includes(req.user?.role)) {
    return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
  }
  next();
};

const loadClient = async (req, clientId) => {
  const client = await prisma.client.findUnique({ where: { id: clientId } });
  if (!client) throw new HttpError(404, 'Client not found');
  if (req.user.role !== 'ADMIN' && client.userId !== req.user.id) throw new HttpError(403, 'Forbidden');
  return client;
};

module.exports = { authenticateToken, authorizeRole, loadClient };
