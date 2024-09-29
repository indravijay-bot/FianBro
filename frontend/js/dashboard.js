document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        
        document.getElementById('user-name').textContent = user.firstName; 
    } else {
        
        window.location.href = '/login';
    }

    const logoutBtn = document.querySelector('#logout-btn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (event) {
            event.preventDefault();

            $.ajax({
                url: '/api/logout',
                type: 'POST',
                data: { email: user.email },
                success: function(response) {
                    console.log('Logged out successfully:', response);
                    localStorage.removeItem('user');
                    window.location.href = '/login';
                },
                error: function(xhr, status, error) {
                    console.error('Logout failed:', error);
                    alert('Logout failed. Please try again.');
                }
            });
        });
    }

    const openChat = document.getElementById("openChat");
    const closeChat = document.getElementById("closeChat");
    const chatModal = document.getElementById("chatModal");

   
    chatModal.style.display = 'none';

    openChat.addEventListener('click', () => {
        if (chatModal.style.display === 'block') {
            chatModal.style.display = 'none'; 
        } else {
            chatModal.style.display = 'block'; 
        }
    });

    closeChat.addEventListener('click', () => {
        chatModal.style.display = 'none';
    });

});
