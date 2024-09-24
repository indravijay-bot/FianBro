document.addEventListener("DOMContentLoaded", function() {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        // Set the user's name in the profile section
        document.getElementById('user-name').textContent = user;
    } else {
        // Redirect to the login page if no user data is found
        // window.location.href = '/login';
    }

    const logoutBtn = document.querySelector('#logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function(event) {
        event.preventDefault();
        // Clear the localStorage and redirect to login page
        localStorage.removeItem('user');
        window.location.href = '/login';
    });
}

});
