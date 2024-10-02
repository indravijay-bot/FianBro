const express = require('express');
const router = express.Router();
const dashboardController = require('../Controllers/dashboard.controller')

router.get('/dashboard', dashboardController);

router.get('/online', (req, res, next) => {
    console.log('Dashboard route hit'); 
    next();  
}, dashboardController);

module.exports = router;
