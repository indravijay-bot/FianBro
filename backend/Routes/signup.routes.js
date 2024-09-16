const signup = require('../Controllers/signup.controller');

const express = require('express');
const router = express.Router();

router.post('/create/user',signup);

module.exports = router;
