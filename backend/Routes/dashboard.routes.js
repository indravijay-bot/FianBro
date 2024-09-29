const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');


router.get('/users', dashboardController.getUsers);


router.get('/chat/:receiverId', dashboardController.getChatHistory);


router.post('/online', dashboardController.setUserOnline);


router.post('/offline', dashboardController.setUserOffline);

module.exports = router;
