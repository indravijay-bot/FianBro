const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/views/index.html'));
});

// Serve the income page
router.get('/income', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/views/incomePage.html'));
});

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/views/signup.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/views/login.html'));
});

router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/views/dashboard.html'));
});
router.get('/addExpense', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/views/addExpense.html'));
});

module.exports = router;
