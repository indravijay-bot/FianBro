const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the home page
router.get('/index.html', (req, res) => {
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

router.get('/about-us.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/views/about-us.html'));
});

router.get('/features.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/views/features.html'));
});
router.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/views/contact.html'));
});

module.exports = router;
