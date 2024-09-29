// const ws = new WebSocket('ws://localhost:8000');
// ws.onopen = () =>{
//     console.log("sockets connected")
// }
// // sendMessage

// document.getElementById('sendMessage').onclick = () => {
//     // const message = document.getElementById('sendMessage').value;
//     ws.send('abhinav');
//   };

//   ws.onmessage = (event) => {
//     console.log('Received from server:', event.data);
//     // document.getElementById('response').textContent = `Server response: ${event.data}`;
//   };

//   ws.onclose = () => {
//     console.log('WebSocket connection closed');
//   };

//   // Handle WebSocket errors
//   ws.onerror = (error) => {
//     console.error('WebSocket error:', error);
//   };

        const sendButton = document.getElementById('sendMessage');


        sendButton.addEventListener('click', () => {
            const inputField = document.getElementById('messageInput');

            const inputValue = inputField.value;
            console.log(inputValue);
            socket.emit('sendMessage', { message:inputValue,roomId:'abhinav-arjun' });
            inputField.value = '';
        });

        

const socket = io('http://localhost:8000', {
    transports: ['polling'] // Force polling instead of WebSockets
  });

socket.emit('joinRoom','abhinav-arjun');
// socket.emit('sendMessage', { message:'hello',roomId:'abhinav-arjun' });

socket.on('abhinav-arjun', (message) => {
    const chatbox = document.getElementById('chatBox');
    const chatDiv = document.createElement('div');
    chatDiv.classList.add('chat-div');
    chatDiv.textContent = message;
    chatbox.appendChild(chatDiv)
    console.log('Received from server:', message);

  });
//   http://localhost:8000/dashboardh