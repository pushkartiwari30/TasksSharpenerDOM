const path = require('path'); // another core module to get the path 

const express = require('express');

//const rootDir = require('../util/path'); // here we re importing the expoted data of path.js file
const productsController = require('../controllers/products');
const router = express.Router();

router.get('/',productsController.getShop);
// the join method returns a path at the end . It constructs this path by concatinating the different segments 
//  first argument passed here ( __dirname )is a global variable made available by nodejs  
// '__dirname' holds the absolute path on our Operating  System to this project flder 
// 2nd argument is '../' Without this argument , the __dirname will poin to the parent of current file. That is route folder. So '../' thi smakes the __dirname points to 1 step upper sibling folder 
// 3rd argumeny is the folder name
// 4th argument is the file 


module.exports = router;