const signup = require('../Controllers/signup.controller');

const express = require('express');
const router = express.Router();

// POST request to /api/income
router.post('/create/user',signup);

// GET request to /api/income (for example, to retrieve all income entries)
// router.get('/cre', incomeController.getIncome);

module.exports = router;
