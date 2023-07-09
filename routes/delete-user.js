const express = require('express');
const router = express.Router();
const User = require('../models/user');
const usersContoller = require('../controllers/users');
router.post('/delete-user', usersContoller.deleteUser);
module.exports = router