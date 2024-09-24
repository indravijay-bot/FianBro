document.getElementById('financeForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const formData = {
        income: document.getElementById('income').value,
        Investment: document.getElementById('invested').value,
        EMI: document.getElementById('emi').value,
        savings: document.getElementById('savings').value,
        expenses: document.getElementById('expenses').value,
        goals: document.getElementById('goals').value
    };

    try {
        const response = await fetch('/api/income', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        if (response.ok) {
            alert('Data submitted successfully');
            window.location.href = "dashboard";
        } else {
            alert('Error: ' + result.message);
        }
    } catch (error) {
        console.error('Error submitting data:', error);
    }
});
