const rateLimit = require('express-rate-limit');

const limiter = (limit, message) =>
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: process.env.NODE_ENV === 'test' ? 10000 : limit,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: { message },
  });

const apiLimiter = limiter(300, 'Too many requests, please try again in 15 minutes');
const loginLimiter = limiter(10, 'Too many login attempts, please try again in 15 minutes');
const leadLimiter = limiter(5, 'Too many messages sent, please try again later');

module.exports = { apiLimiter, loginLimiter, leadLimiter };
