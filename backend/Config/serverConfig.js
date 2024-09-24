const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Socket.io configuration
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Listen for chat messages
    socket.on('chatMessage', (msg) => {
        io.emit('chatMessage', msg); // Broadcast to all users
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});
module.exports = { app, server };
