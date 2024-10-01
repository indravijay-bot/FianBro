const express = require('express');
const router = express.Router();
const expenseController = require('../Controllers/expense.controller'); // Adjust path as needed

// POST request to /api/expense
router.post('/expense', expenseController.createExpense);

// GET request to /api/expense (for example, to retrieve all income entries)
router.get('/expense/:id', expenseController.getExpense);

module.exports = router;
