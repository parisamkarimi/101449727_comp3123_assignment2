const express = require('express');
const router = express.Router();

// Example: Create a new employee
router.post('/', (req, res) => {
    // Your employee creation logic here
    res.send('Employee created');
});

// Get all employees
router.get('/', (req, res) => {
    // Your logic to fetch all employees
    res.send('List of employees');
});

module.exports = router;
