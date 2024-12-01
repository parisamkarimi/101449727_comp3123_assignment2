const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const employeeRoutes = require('./routes/employee');

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Set up routes
app.use('/api/users', userRoutes);        // For user-related API
app.use('/api/employees', employeeRoutes); // For employee-related API

// MongoDB connection setup
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Define the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
