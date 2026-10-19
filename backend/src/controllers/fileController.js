const crypto = require('crypto');
const { prisma } = require('../config/db');
const storage = require('../utils/storage');
const { loadClient } = require('../middleware/auth');
const { HttpError } = require('../utils/http');

const uploadFile = async (req, res) => {
  const client = await loadClient(req, req.params.id);
  const name = decodeURIComponent(req.headers['x-file-name'] || '').replace(/[\\/]/g, '_').trim();
  if (!name || !Buffer.isBuffer(req.body) || !req.body.length) throw new HttpError(400, 'File is missing');

  const mimeType = req.headers['content-type'] || 'application/octet-stream';
  const key = `clients/${client.id}/${crypto.randomUUID()}-${name}`;
  await storage.save(key, req.body, mimeType);

  const file = await prisma.file.create({
    data: { name, key, mimeType, size: req.body.length, uploadedBy: req.user.role, clientId: client.id },
  });
  res.status(201).json(file);
};

const findFile = async (req) => {
  const file = await prisma.file.findUnique({ where: { id: req.params.id } });
  if (!file) throw new HttpError(404, 'File not found');
  await loadClient(req, file.clientId);
  return file;
};

const downloadFile = async (req, res) => {
  const file = await findFile(req);
  res.set({
    'Content-Type': file.mimeType,
    'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(file.name)}`,
  });
  res.send(await storage.read(file.key));
};

const deleteFile = async (req, res) => {
  const file = await findFile(req);
  await storage.remove(file.key);
  await prisma.file.delete({ where: { id: file.id } });
  res.status(204).end();
};

module.exports = { uploadFile, downloadFile, deleteFile };
