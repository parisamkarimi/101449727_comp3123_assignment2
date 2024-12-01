const express = require('express');
const router = express.Router();

// Example: User registration route
router.post('/signup', (req, res) => {
    // Your signup logic here
    res.send('User signed up');
});

router.post('/login', (req, res) => {
    // Your login logic here
    res.send('User logged in');
});

module.exports = router;
