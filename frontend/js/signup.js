$(document).ready(function() {
    $('#signupForm').on('submit', function(event) {
        event.preventDefault();

        
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
            data: JSON.stringify(formData), 
            success: function(response) {
                if (response) {
                    
                    localStorage.setItem('user', JSON.stringify(response.user));
                    window.location.href = "login";

                    $('#signupForm')[0].reset();
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
