const Message = require('../Modals/chat.modal'); 

exports.saveMessage = async (senderId, receiverId, message) => {
    const newMessage = new Message({ senderId, receiverId, message });
    return await newMessage.save(); 
};

exports.getChatHistory = async (roomId) => {
    return await Message.find({ roomId }).sort({ createdAt: 1 });
};

