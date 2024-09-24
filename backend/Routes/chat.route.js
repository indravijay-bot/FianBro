// backend/Routes/chat.routes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Chat service is running.');
});

module.exports = router;
