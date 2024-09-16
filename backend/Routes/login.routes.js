const loginController = require('../Controllers/login.controller');
const express = require('express');
const router = express.Router();



router.post('/login',loginController);

module.exports = router;
