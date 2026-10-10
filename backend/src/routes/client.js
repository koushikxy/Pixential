const express = require('express');
const { getClients, createClient } = require('../controllers/clientController');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

const router = express.Router();

// Only authenticated admins and clients can access these routes
router.use(authenticateToken);

router.get('/', authorizeRole(['ADMIN', 'CLIENT']), getClients);
router.post('/', authorizeRole(['ADMIN']), createClient); // Only Admin can create

module.exports = router;
