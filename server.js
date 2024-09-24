const express = require('express');
const path = require('path');
const db = require('./backend/Config/db');
const { app, server } = require('./backend/Config/serverConfig');
const { port } = require('./backend/Config/envConfig');
const socketIO = require('socket.io'); // Import Socket.IO

// Initialize Socket.IO and bind it to the server
const io = socketIO(server);

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'frontend')));

// Initialize the database
db();

// Middleware for parsing JSON
app.use(express.json());

// Import and set up routes
const pageRoutes = require('./backend/Routes/homepage.route');
const incomeRoutes = require('./backend/Routes/income.route');
const signupRoute = require('./backend/Routes/signup.routes');
const loginRoute = require('./backend/Routes/login.routes');
const chatController = require('./backend/Controllers/chat.controller'); // Import chat controller
const chatRoutes = require('./backend/Routes/chat.route');

// Use routes
app.use('/', pageRoutes);
app.use('/api', incomeRoutes);
app.use('/api', signupRoute);
app.use('/api', loginRoute);
console.log('Setting up /api routes');

// Set up chat controller to handle socket events
chatController(io);

// Use chat routes (optional, depending on how you are handling chat endpoints)
app.use('/chat', chatRoutes);

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
