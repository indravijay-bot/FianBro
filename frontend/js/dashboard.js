var totalExpense = 0;
var totalSaving = 0;
var totalIncome = 0;
var expenseAllowance = 0;

document.addEventListener("DOMContentLoaded", function () {
    
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("user", user?._id);
    const path = window.location.pathname;
    
    if ((path == "/dashboard" || path == "/expenses" || path == "/addExpense") && user && user != "") {
        
        // Fetch income details
        $.ajax({
            url: `/api/income/${user._id}`,
            type: 'GET',
            success: function(response) {
                console.log('Income data fetched successfully:', response);
                totalIncome = totalIncome + parseInt(response[0]?.income);
                totalSaving = parseInt(response[0]?.savings);
                totalExpense = totalExpense + parseInt(response[0]?.expenses);
                expenseAllowance = totalIncome - totalExpense - totalSaving;
                console.log(expenseAllowance)
                // Update the DOM for income, savings, and allowance
                document.getElementById('total-income').textContent = `$${totalIncome}`;
                document.getElementById('total-savings').textContent = `$${totalSaving}`;
                document.getElementById('allownace').textContent = `$${expenseAllowance}`;
            },
            error: function(xhr, status, error) {
                console.error('Error fetching income:', error);
                alert('Error fetching income: ' + error);
            }
        });

        // Fetch expense details
        $.ajax({
            url: `/api/expense/${user._id}`,
            type: 'GET',
            success: function(response) {
                console.log("Expenses data fetched successfully:", response);
                if (response && response.length > 0) {
                    var tableBody = '';
                    response.forEach(function(expense) {
                        totalExpense = totalExpense + parseInt(expense?.amount);
                        expenseAllowance = totalIncome - totalExpense - totalSaving;

                        // Update table
                        tableBody += `<tr>
                                        <td>${expense.description}</td>
                                        <td>$${expense.amount}</td>
                                        <td>${expense.dateReceived ? new Date(expense.dateReceived).toISOString().split('T')[0] : 'Invalid date'}</td>
                                        <td>${expense.description}</td>
                                      </tr>`;
                    });

                    $('table tbody').html(tableBody); // Append rows to the table body
                } else {
                    $('table tbody').html('<tr><td colspan="4">No recent transactions found</td></tr>');
                }

                // Update the DOM for total expenses and allowance
                document.getElementById('total-expenses').textContent = `$${totalExpense}`;
                document.getElementById('allownace').textContent = `$${expenseAllowance}`;
            },
            error: function(xhr, status, error) {
                alert('Error fetching transaction data: ' + error);
            }
        });
    }
    
    // User check and logout handling
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

    // Chat modal handling
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
