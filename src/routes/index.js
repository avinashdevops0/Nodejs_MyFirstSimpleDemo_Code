const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Docker Node.js Practice App!',
    timestamp: new Date().toISOString(),
    hostname: process.env.HOSTNAME || 'localhost',
    environment: process.env.NODE_ENV || 'development'
  });
});

module.exports = router;
