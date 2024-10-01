const addProductButton = document.getElementById('addProduct');

if (addProductButton) { // Check if the element exists
    addProductButton.addEventListener('click', function() {
        // Redirect to the add expense page
        window.location.href = '/addExpense';
    });
}

document.getElementById('expenseForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("user", user._id)
    console.log("Ahiya 0" )
    
    const formData = {
        title: document.getElementById('titleE').value,
        amount: document.getElementById('amountE').value,
        dateReceived: document.getElementById('dateReceivedE').value,
        description: document.getElementById('descriptionE').value,
        users: user._id
    };

    try {
        
     
        const response = await fetch('/api/expense', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        if (response.ok) {
        console.log("Ahiya 2")

            alert('Data submitted successfully');
            window.location.href = "dashboard";
        } else {
            alert('Error: ' + result.message);
        }
    } catch (error) {
        console.error('Error submitting data:', error);
    }
});
