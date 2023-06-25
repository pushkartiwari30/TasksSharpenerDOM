const path = require('path'); // another core module to get the path 

const express = require('express');

//const rootDir = require('../util/path'); // here we re importing the expoted data of path.js file
const productsController = require('../controllers/products');
const router = express.Router();

router.get('/contact', productsController.getContact);
router.post('/contact', productsController.postContact);

module.exports = router;