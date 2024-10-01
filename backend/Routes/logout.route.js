const logoutController = require('../Controllers/logout.controller');
const express = require('express');
const router = express.Router();



router.post('/logout',logoutController);

module.exports = router;
