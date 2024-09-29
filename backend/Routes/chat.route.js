const express = require('express');
const router = express.Router();

// Define the endpoint for sending messages
router.post('/send', (req, res) => {
    const { message, senderId, receiverId } = req.body;
    // Logic to save message to MongoDB goes here
    // Send a response back to the client
    res.status(201).json({ success: true, message: 'Message saved!' });
});

module.exports = router;
