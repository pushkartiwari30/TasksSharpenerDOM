const path = require('path');

const express = require('express');

const productsController = require('../controllers/products'); // imposrting the controller fn from product.js 

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);// we dont execute this fun. We just pass the reference of this fn 

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
