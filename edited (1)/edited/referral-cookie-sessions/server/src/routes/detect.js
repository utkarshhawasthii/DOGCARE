const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Multer upload to temp dir
const upload = multer({ dest: 'uploads/' });

// ML service URL from env
const ML_URL = process.env.ML_SERVICE_URL || 'http://localhost:8000';

// POST /api/detect
router.post('/', upload.single('dogImage'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    const imagePath = req.file.path;

    // Call Python service
    const mlResponse = await axios.post(`${ML_URL}/predict`, { imagePath }, { timeout: 30000 });

    // Cleanup file
    fs.unlinkSync(imagePath);

    res.json({
      success: true,
      prediction: mlResponse.data
    });
  } catch (err) {
    // Cleanup on error
    if (req.file) fs.unlinkSync(req.file.path);
    
    console.error('Detection error:', err.message);
    res.status(500).json({ error: 'Detection failed', details: err.message });
  }
});

module.exports = router;

