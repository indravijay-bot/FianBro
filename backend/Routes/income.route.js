const express = require('express');
const router = express.Router();
const incomeController = require('../Controllers/income.controller'); 


router.post('/income', incomeController.createIncome);


router.get('/income/:id', incomeController.getIncome);

module.exports = router;
