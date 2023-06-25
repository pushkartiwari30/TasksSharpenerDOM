const path = require('path');

const express = require('express');

//const rootDir = require('../util/path'); // here we re importing the expoted data of path.js file 
const productsController = require('../controllers/products'); // imposrting the controller fn from product.js

const router = express.Router(); // this Router is like a mini express app tied to the other express app ( pluagble into other express app)

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

module.exports = router // this 'router' has above two routes and it gets expoted . And we will import this into the app js file 

//when we use router.get('/' .....), the exact matching of the urlis done. That is for node using app.get request '/'  and '/abc' are not same 
// this is unline using app.use for whihc '/' and '/abc' are same  