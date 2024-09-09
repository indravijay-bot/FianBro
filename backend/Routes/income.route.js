const express = require('express');
const router = express.Router();
const incomeController = require('../Controllers/income.controller'); // Adjust path as needed

// POST request to /api/income
router.post('/income', incomeController.createIncome);

// GET request to /api/income (for example, to retrieve all income entries)
router.get('/income', incomeController.getIncome);

module.exports = router;
