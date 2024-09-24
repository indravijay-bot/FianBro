$(document).ready(function() {
    $('#signupForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        var formData = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            email: $('#email').val(),
            phoneNo: $('#phoneNo').val(),
            password: $('#password').val()
        };

        $.ajax({
            url: '/api/create/user', 
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData), // Convert form data to JSON
            success: function(response) {
                if (response) {
                    window.location.href = "login";

                    $('#signupForm')[0].reset(); // Reset the form
                } else {
                    alert('Error: ' + response.message);
                }
            },
            error: function(error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        });
    });
});
