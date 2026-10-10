require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { apiLimiter } = require('./middleware/rateLimiter');
const logger = require('./utils/logger');
// const Sentry = require('@sentry/node'); // Sentry placeholder

const app = express();
const PORT = process.env.PORT || 5000;

// Sentry.init({ dsn: process.env.SENTRY_DSN });
// app.use(Sentry.Handlers.requestHandler());

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use('/api', apiLimiter);

// Routes
app.use('/api/upload', require('./routes/upload'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/clients', require('./routes/client'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// app.use(Sentry.Handlers.errorHandler());

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
