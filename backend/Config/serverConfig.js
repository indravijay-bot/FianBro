const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');

const wss = new WebSocket.Server({ server });
// const io = new Server(server);

// wss.on('connection', (ws) => {
//     console.log('Client connected');
    
//     // When receiving a message from a client
//     ws.on('message', (message) => {
//       console.log(`Received: ${message}`);
      
//       // Responding back to the client
//       ws.send(`Server says: ${message}`);
//     });
  
//     // Handle client disconnect
//     ws.on('close', () => {
//       console.log('Client disconnected');
//     });
//   });

const io = new Server(server, {
    // cors: {
    //   origin: "http://localhost:8000",
    //   methods: ["GET", "POST"],
    // },
  });
  io.on('connection', (socket) => {
    console.log('A client connected:', socket.id);
  
    // Handle user joining a specific room
    socket.on('joinRoom', (roomId) => {
      console.log(`Client ${socket.id} joined room: ${roomId}`);
      socket.join(roomId); // Client joins a specific room
    });
  
    // Handle messages sent to a specific room
    socket.on('sendMessage', (data) => {
      const { message, roomId } = data;
      console.log(`nt ${socket.id} to room ${roomId}: ${message}`);
      io.emit(roomId,message)
    });
    // Handle disconnect
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
  });
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

module.exports = { app, server };
