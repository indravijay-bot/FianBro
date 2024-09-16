$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const username = $('#username').val();
        const password = $('#password').val();

        $.ajax({
            url: '/api/login', // Make sure this matches your route
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                email: username,
                password: password
            }),
            success: function(response) {
                console.log('Response:', response); // Log the response from the server
                if (response.message === "successful") {
                    alert("Login successful!");
                     window.location.href = "dashboard.html"; // Redirect on success
                } else {
                    displayError(response.message);
                }
            },
            error: function(xhr, status, error) {
                console.error('Error:', error); // Log the error
                displayError("An error occurred during login.");
            }
        });
    });

    function displayError(message) {
        $('#error-message').text(message).css('color', 'red');
    }
});
