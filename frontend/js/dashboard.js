document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        // Set the user's name in the profile section
        document.getElementById('user-name').textContent = user.firstName; // Assuming user has firstName property
    } else {
        // Redirect to the login page if no user data is found
        window.location.href = '/login';
    }

    const logoutBtn = document.querySelector('#logout-btn');
 
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (event) {
            event.preventDefault();
            // let data = localStorage.getItem(user);
            // data = JSON.parse(data);

            $.ajax({
                url: '/api/logout', // Your API endpoint for logout
                type: 'POST', // Use the appropriate method (GET, POST, etc.)
                data: { email: user.email },
                success: function(response) {
                    // Handle a successful logout response
                    console.log('Logged out successfully:', response);
                    // Clear the localStorage and redirect to login page
                    localStorage.removeItem('user');
                    window.location.href = '/login';
                },
                error: function(xhr, status, error) {
                    // Handle errors if the logout fails
                    console.error('Logout failed:', error);
                    alert('Logout failed. Please try again.'); // Optionally, notify the user
                }
            });
        });
    }
    

    // Elements
    const openChat = document.getElementById("openChat");
    const closeChat = document.getElementById("closeChat");
    const chatModal = document.getElementById("chatModal");
    const messageInput = document.getElementById("messageInput");
    const sendMessage = document.getElementById("sendMessage");
    const chatBox = document.getElementById("chatBox");
    const recipientInput = document.getElementById("recipientInput");

    // Show/Hide chat modal
    openChat.addEventListener('click', () => {
        chatModal.style.display = 'block';
    });

    closeChat.addEventListener('click', () => {
        chatModal.style.display = 'none';
    });

    // // Send message
    // sendMessage.addEventListener('click', () => {
    //     const message = messageInput.value.trim();
    //     const recipient = recipientInput.value.trim(); // Ensure recipient is trimmed
    //     if (message && recipient) {
    //         socket.emit('privateMessage', { message, recipient });
    //         messageInput.value = ''; // Clear the input field
    //     }
    // });

    // // Receive message
    // socket.on('privateMessage', (data) => {
    //     const messageElement = document.createElement('div');
    //     messageElement.textContent = `${data.sender}: ${data.message}`;
    //     chatBox.appendChild(messageElement);
    // });

    // // Register the user when they connect
    // const userID = user ? user._id : null; // Use actual user ID from user data
    // if (userID) {
    //     socket.emit('registerUser', userID);
    // }
});
