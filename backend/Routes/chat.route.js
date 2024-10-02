const express = require('express');
const router = express.Router();


router.post('/send', (req, res) => {
    const { message, senderId, receiverId } = req.body;

    res.status(201).json({ success: true, message: 'Message saved!' });
});

module.exports = router;
