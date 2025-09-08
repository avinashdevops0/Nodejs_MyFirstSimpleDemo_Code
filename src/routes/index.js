const express = require('express');
const router = express.Router();

router.get('/api/welcome', (req, res) => {
  res.json({
    message: '🎉 Welcome to Docker Node.js Demo!',
    description: 'This is a simple demo application for Docker practice',
    features: [
      'Docker containerization',
      'Express.js server',
      'Static file serving',
      'REST API endpoint'
    ],
    timestamp: new Date().toISOString(),
    container: process.env.HOSTNAME || 'localhost',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Serve main page
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './src/public' });
});

module.exports = router;
