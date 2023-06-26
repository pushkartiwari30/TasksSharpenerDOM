const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct); // this is the routing that will handle respeonses for the specific objects 
//productId is the uniuq id number we gave to every object 
// not the colen in the endpoint name '/products/:productId' . This colen denotes that anything after colen is a variable segment. 
// This is what Dynamic routing 

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
