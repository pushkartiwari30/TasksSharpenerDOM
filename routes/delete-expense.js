const express = require('express');
const router = express.Router();
const Expense = require('../models/expense'); 
const expensesController = require('../controllers/expenses');  

router.post('/delete-expense', expensesController.postDeleteExpense);
module.exports = router;