const socket = io(); // Connect to the server

// Chat elements
const chatModal = document.getElementById('chatModal');
const openChatBtn = document.getElementById('openChat'); // Corrected button reference
const closeChatBtn = document.getElementById('closeChat');
const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendMessageBtn = document.getElementById('sendMessage');

// Show the chat modal when the "Open Chat" button is clicked
openChatBtn.addEventListener('click', () => {
    chatModal.style.display = 'block';
});

// Close the chat modal when the "X" button is clicked
closeChatBtn.addEventListener('click', () => {
    chatModal.style.display = 'none';
});

// Send message to the server without selecting recipient manually
sendMessageBtn.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        socket.emit('privateMessage', { message }); // No need to send recipient
        messageInput.value = ''; // Clear the input field
    }
});

// Display incoming messages
socket.on('privateMessage', (msg) => {
    const messageElement = document.createElement('p');
    messageElement.textContent = `${msg.sender}: ${msg.message}`;
    chatBox.appendChild(messageElement);
});
