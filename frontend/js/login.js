$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault(); 

        const username = $('#username').val();
        const password = $('#password').val();

        $.ajax({
            url: '/api/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                email: username,
                password: password
            }),
            success: function(response) {
                console.log('Response:', response);
                if (response.message === "Login successful") {
                    // Store user details, including the user ID
                    localStorage.setItem('user', JSON.stringify(response.result));
                    window.location.href = "income";

                    // After successful login or session validation
                    const userID = response.result._id; // Get user ID from the response
                    socket.emit('registerUser', userID);
                } else {
                    displayError(response.message);
                }
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
                displayError("An error occurred during login.");
            }
        });
    });

    function displayError(message) {
        $('#error-message').text(message).css('color', 'red');
    }
});
