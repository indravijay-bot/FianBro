const socket = io('http://localhost:8000', {
    transports: ['polling'] 
});

const user = JSON.parse(localStorage.getItem('user'));
const userId = user ? user._id : null; 

if (!userId) {
    console.error('User ID not found in local storage');
}

let roomId = '';  
let onlineId = '';
let currentFriendId = '';
let onlineUsers = []; 

function joinRoom(onlineUserId) {
    roomId = `${userId}-${onlineUserId}`;  
    socket.emit('joinRoom', roomId);
    onlineId = `${onlineUserId}`;
    console.log(`Joined room: ${roomId}`);
}


const onlineFriendsModal = document.getElementById('onlineFriendsModal');
const closeFriends = document.getElementById('closeFriends');
const friendsList = document.getElementById('friendsList');
const onlineFriendBtn = document.getElementById('onlineFriends');

if (onlineFriendBtn) {
    onlineFriendBtn.addEventListener('click', function (event) {
        event.preventDefault();
        if (onlineFriendsModal.style.display === 'block') {
            onlineFriendsModal.style.display = 'none'; 
        } else {
            onlineFriendsModal.style.display = 'block'; 
            
            $.ajax({
                url: '/api/online',  
                type: 'GET',
                success: function(response) {
                    console.log('Online friends:', response.onlineUsers);
                    friendsList.innerHTML = '';
                    onlineUsers = response.onlineUsers; 

                    if (onlineUsers.length > 0) {
                        onlineUsers.forEach(function(friend) {
                            friendsList.innerHTML += `<p class="friend" data-id="${friend._id}">${friend.firstName} ${friend.lastName}</p>`;
                        });
                    } else {
                        friendsList.innerHTML = '<p>No friends are online.</p>';
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Failed to fetch online friends:', error);
                    alert('Unable to fetch online friends. Please try again.');
                }
            });
        }
    });
}

if (closeFriends) {
    closeFriends.addEventListener('click', function () {
        onlineFriendsModal.style.display = 'none';
    });
}

friendsList.addEventListener('click', function(event) {
    const friendElement = event.target.closest('.friend');
    if (friendElement) {
        const friendId = friendElement.getAttribute('data-id');
        openChatWithUser(friendId);
    }
});


function openChatWithUser(friendId) {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
        const roomId = `${user._id}-${friendId}`;
        console.log(roomId);
        socket.emit('joinRoom', roomId);
        chatModal.style.display = 'block';

        currentFriendId = friendId; 
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.getElementById('sendMessage');
    const inputField = document.getElementById('messageInput');
    const chatBox = document.getElementById('chatBox');


    console.log("Send button:", sendButton);
    console.log("Input field:", inputField);
    console.log("Chat box:", chatBox);

    if (sendButton) {  
        sendButton.addEventListener('click', function(event) {
            event.preventDefault();
            console.log("Button clicked");

            const inputValue = inputField.value;  
            console.log("Input value:", inputValue);

            if (!userId) {
                console.error('User ID not found in local storage');
                return; 
            }

            if (!currentFriendId) {
                console.error('Current friend ID not set');
                return; 
            }

            
            socket.emit('sendMessage', { 
                message: inputValue, 
                roomId: roomId 
            });
console.log(onlineUsers);
            fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: inputValue,
                    senderId: userId,
                    receiverId: currentFriendId  
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Message sent successfully:', data);
                inputField.value = '';

                const messageDiv = document.createElement('div');
                messageDiv.innerHTML = `<strong>${userId}:</strong> ${inputValue}`;
                chatBox.appendChild(messageDiv);
            })
            .catch(error => {
                console.error('Failed to send message:', error);
                alert('Unable to send the message. Please try again.');
            });
        });
    } else {
        console.error("Send button not found.");
    }

    socket.on(roomId, (message) => {
        const chatbox = document.getElementById('chatBox');
        const chatDiv = document.createElement('div');
        chatDiv.classList.add('chat-div');
        chatDiv.textContent = message;
        chatbox.appendChild(chatDiv);
        console.log('Received from server:', message);
    });
});
