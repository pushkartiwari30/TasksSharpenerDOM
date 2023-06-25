const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

// Before this task, the abovce peice of code was written like below . So the below callback function had all the ccontrller logic. 
// This is fine but when we make a very big app , managing the contrller logic in the routes file will be a big mess 
// router.get('/', (req, res, next) => {
//   const products = adminData.products;
//   res.render('shop', {
//     prods: products,
//     pageTitle: 'Shop',
//     path: '/',
//     hasProducts: products.length > 0,
//     activeShop: true,
//     productCSS: true
//   });
// });

module.exports = router;
