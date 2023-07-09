const express = require('express');
const router = express.Router();
const User = require('../models/user');
const usersContoller = require('../controllers/users');
router.post('/add-user', usersContoller.postAddUser);
module.exports = router