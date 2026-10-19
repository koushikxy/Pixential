const express = require('express');
const m = require('../controllers/milestoneController');
const f = require('../controllers/fileController');
const l = require('../controllers/leadController');
const { authenticateToken, authorizeRole } = require('../middleware/auth');
const { leadLimiter } = require('../middleware/rateLimiter');
const { route } = require('../utils/http');

const router = express.Router();
const admin = [authenticateToken, authorizeRole(['ADMIN'])];

router.post('/leads', leadLimiter, route(l.createLead));
router.get('/leads', admin, route(l.getLeads));
router.put('/leads/:id', admin, route(l.updateLead));
router.delete('/leads/:id', admin, route(l.deleteLead));
router.get('/stats', admin, route(l.getStats));

router.put('/milestones/:id', admin, route(m.updateMilestone));
router.delete('/milestones/:id', admin, route(m.deleteMilestone));

router.get('/files/:id/download', authenticateToken, route(f.downloadFile));
router.delete('/files/:id', authenticateToken, route(f.deleteFile));

module.exports = router;
