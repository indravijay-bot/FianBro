const User = require('../Modals/user.modal')
const service = require('../Services/login.service')
const dashboardController = {


    getUsers: async (req, res) => {
        try {
            const currentUserId = req.body.userId;
            const users = await User.find({ _id: { $ne: currentUserId } }, 'firstName lastName online');
            
            res.status(200).json({
                success: true,
                users
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch users",
                error: error.message
            });
        }
    },


    getChatHistory: async (req, res) => {
        try {
            const currentUserId = req.body.userId;
            const { receiverId } = req.params;

            const chatHistory = await Chat.find({
                $or: [
                    { sender_id: currentUserId, receiver_id: receiverId },
                    { sender_id: receiverId, receiver_id: currentUserId }
                ]
            }).sort({ createdAt: 1 });

            res.status(200).json({
                success: true,
                chatHistory
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch chat history",
                error: error.message
            });
        }
    },


};

module.exports = dashboardController;
