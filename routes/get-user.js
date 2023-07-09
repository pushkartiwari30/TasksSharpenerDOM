const express = require('express');
const router = express.Router();
const User = require('../models/user');

const usersContoller = require('../controllers/users');

router.get('/get-user', usersContoller.getUsers);
module.exports = router