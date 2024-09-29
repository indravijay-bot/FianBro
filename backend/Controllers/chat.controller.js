const User = require('../Modals/user.modal');

module.exports = (io) => {
    const users = {}; 

    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);


        socket.on('registerUser', async (userID) => {
            try {
                const user = await User.findById(userID);
                if (user) {
                    users[user.username] = socket.id;
                    socket.userID = userID;
                    console.log(`${user.username} registered with socket ID ${socket.id}`);
                }
            } catch (error) {
                console.error('Error registering user:', error);
            }
        });

        // Handle private messages
        socket.on('privateMessage', async ({ message, recipient }) => {
            try {
                const recipientUser = await User.findOne({ username: recipient });
                if (recipientUser && users[recipientUser.username]) {
                    const recipientSocketId = users[recipientUser.username];
                    io.to(recipientSocketId).emit('privateMessage', {
                        message,
                        sender: socket.userID,
                    });
                    console.log(`Message from ${socket.userID} to ${recipientUser.username}: ${message}`);
                } else {
                    console.log('Recipient not found or offline.');
                }
            } catch (error) {
                console.error('Error sending message:', error);
            }
        });

        socket.on('disconnect', () => {
            for (const username in users) {
                if (users[username] === socket.id) {
                    delete users[username];
                    console.log(`${username} disconnected`);
                    break;
                }
            }
        });
    });
};
