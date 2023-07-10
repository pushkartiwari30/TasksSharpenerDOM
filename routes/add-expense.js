const express = require('express');
const router = express.Router();
const Expense = require('../models/expense'); 
const expensesController = require('../controllers/expenses');

router.post('/add-expense',expensesController.postAddExpense);
module.exports = router; 