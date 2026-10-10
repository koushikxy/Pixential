const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const { generatePresignedUrl } = require('../utils/s3');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

router.post('/presigned-url', authenticateToken, async (req, res) => {
  try {
    const { fileName, fileType } = req.body;
    
    if (!fileName || !fileType) {
      return res.status(400).json({ message: 'Missing fileName or fileType' });
    }

    const key = `uploads/${req.user.id}/${uuidv4()}-${fileName}`;
    const presignedUrl = await generatePresignedUrl(key, fileType);
    
    const fileUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    res.json({ presignedUrl, fileUrl, key });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
