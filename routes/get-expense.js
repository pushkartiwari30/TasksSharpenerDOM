const express = require('express');
const router = express.Router();
const Expense = require('../models/expense'); 
const expensesController = require('../controllers/expenses');

router.get('/get-expense', expensesController.getExpense);
module.exports = router;