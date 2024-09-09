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

module.exports = router;
