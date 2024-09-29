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


//JS code for budget planning below
let budgets = [];

function addBudget() {
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);
  
  if (category && !isNaN(amount) && amount > 0) {
    budgets.push({ category, amount });
    updateBudgetTable();
    document.getElementById("category").value = '';
    document.getElementById("amount").value = '';
  } else {
    alert("Please enter valid values.");
  }
}

function updateBudgetTable() {
  const tableBody = document.getElementById("budgetTableBody");
  tableBody.innerHTML = '';
  let total = 0;

  budgets.forEach((budget, index) => {
    total += budget.amount;
    tableBody.innerHTML += `
      <tr>
        <td>${budget.category}</td>
        <td>$${budget.amount.toFixed(2)}</td>
        <td><button onclick="removeBudget(${index})">Remove</button></td>
      </tr>
    `;
  });

  document.getElementById("totalBudget").innerText = `Total Budget: $${total.toFixed(2)}`;
}

function removeBudget(index) {
  budgets.splice(index, 1);
  updateBudgetTable();
}
