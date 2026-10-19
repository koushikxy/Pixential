const express = require('express');
const c = require('../controllers/clientController');
const m = require('../controllers/milestoneController');
const { uploadFile } = require('../controllers/fileController');
const { authenticateToken, authorizeRole } = require('../middleware/auth');
const { route } = require('../utils/http');

const router = express.Router();
const admin = authorizeRole(['ADMIN']);

router.use(authenticateToken);

router.get('/me', authorizeRole(['CLIENT']), route(c.getMyClient));
router.get('/', admin, route(c.getClients));
router.post('/', admin, route(c.createClient));
router.get('/:id', route(c.getClient));
router.put('/:id', admin, route(c.updateClient));
router.delete('/:id', admin, route(c.deleteClient));
router.post('/:id/milestones', admin, route(m.createMilestone));
router.post('/:id/files', express.raw({ type: () => true, limit: '20mb' }), route(uploadFile));

module.exports = router;
