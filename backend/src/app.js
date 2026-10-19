const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { apiLimiter } = require('./middleware/rateLimiter');
const logger = require('./utils/logger');

const app = express();

if (process.env.NODE_ENV === 'production') app.set('trust proxy', 1);

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json({ limit: '100kb' }));
app.use('/api', apiLimiter);

app.use('/api/auth', require('./routes/auth'));
app.use('/api/clients', require('./routes/client'));
app.use('/api', require('./routes/misc'));

app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

app.use((req, res) => res.status(404).json({ message: 'Not found' }));

app.use((err, req, res, next) => {
  if (err.code === 'P2025') return res.status(404).json({ message: 'Record not found' });
  if (err.code === 'P2002') return res.status(409).json({ message: 'That email is already in use' });
  if (err.type === 'entity.too.large') return res.status(413).json({ message: 'File is too large' });
  if (err.status) return res.status(err.status).json({ message: err.message });
  logger.error(err.stack || err.message);
  res.status(500).json({ message: 'Server error' });
});

module.exports = app;
