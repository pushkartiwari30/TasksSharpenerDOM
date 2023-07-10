const express = require('express');
const router = express.Router();
const Expense = require('../models/expense'); 
const expensesController = require('../controllers/expenses');

router.post('/edit-expense', expensesController.postEditExpense)
module.exports = router;