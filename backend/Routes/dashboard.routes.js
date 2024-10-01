const express = require('express');
const router = express.Router();
const dashboardController = require('../Controllers/dashboard.controller')

router.get('/dashboard', dashboardController);
// This route will fetch online users
router.get('/online', (req, res, next) => {
    console.log('Dashboard route hit');  // Check if the route is being triggered
    next();  // Call the next middleware (the controller)
}, dashboardController);

module.exports = router;
