const chatService = require('../Services/chat.service');


exports.getChatHistory = async (req, res) => {
    const roomId = req.params.roomId;

    try {
        const messages = await chatService.getChatHistory(roomId);
        res.json({ messages });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch chat history' });
    }
};


exports.sendMessage = async (req, res) => {
    const { senderId, receiverId, message } = req.body;

    try {
        const savedMessage = await chatService.saveMessage(senderId, receiverId, message);
        res.status(201).json(savedMessage);
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
};
