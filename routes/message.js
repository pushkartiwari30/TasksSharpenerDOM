const path = require('path'); // another core module to get the path ! 

const express = require('express');

const rootDir = require('../util/path'); // here we re importing the expoted data of path.js file
const productsController = require('../controllers/products');
const router = express.Router();

router.get('/message',productsController.getMessage);

module.exports = router;