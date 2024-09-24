const User = require('../Modals/user.modal'); // Assuming you have a User model for MongoDB

module.exports = (io) => {
    const users = {}; // Store online users and their socket IDs

    // When a user connects
    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        // Retrieve user from database using session or token data (e.g., req.user.id)
        // Assuming the client sends their userID on connection
        socket.on('registerUser', async (userID) => {
            try {
                // Fetch user from DB by ID
                const user = await User.findById(userID);
                if (user) {
                    users[user.username] = socket.id; // Store username and socket ID
                    socket.userID = userID; // Save user ID in the socket instance
                    console.log(`${user.username} is registered with socket ID ${socket.id}`);
                }
            } catch (error) {
                console.log('Error registering user:', error);
            }
        });

        // Handle private messages
        socket.on('privateMessage', async ({ message }) => {
            try {
                // Automatically select a recipient (for example, a friend or a particular user)
                // This could be a user-specific recipient fetched from the database
                const recipientUser = await User.findOne({ username: 'desiredRecipient' }); // Auto-select logic here
                if (recipientUser && users[recipientUser.username]) {
                    const recipientSocketId = users[recipientUser.username]; // Get recipient's socket ID
                    io.to(recipientSocketId).emit('privateMessage', { message, sender: socket.id });
                    console.log(`Message from ${socket.userID} to ${recipientUser.username}: ${message}`);
                }
            } catch (error) {
                console.log('Error sending message:', error);
            }
        });

        // Clean up when a user disconnects
        socket.on('disconnect', () => {
            for (const username in users) {
                if (users[username] === socket.id) {
                    delete users[username];
                    console.log(`${username} has disconnected`);
                    break;
                }
            }
        });
    });
};
