const express = require('express');
const router = express.Router();

// Define your routes
router.get('/employees', (req, res) => {
  res.send('Employee list');
});

module.exports = router;
