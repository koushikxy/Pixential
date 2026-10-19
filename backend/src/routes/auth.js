const express = require('express');
const { login, me, changePassword, forgotPassword, resetPassword } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/auth');
const { loginLimiter } = require('../middleware/rateLimiter');
const { route } = require('../utils/http');

const router = express.Router();

router.post('/login', loginLimiter, route(login));
router.post('/forgot-password', loginLimiter, route(forgotPassword));
router.post('/reset-password', loginLimiter, route(resetPassword));
router.get('/me', authenticateToken, route(me));
router.put('/password', authenticateToken, route(changePassword));

module.exports = router;
