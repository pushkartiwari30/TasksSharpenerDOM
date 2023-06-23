const path = require('path');

const express = require('express');

const rootDir = require('../util/path'); // here we re importing the expoted data of path.js file 

const router = express.Router(); // this Router is like a mini express app tied to the other express app ( pluagble into other express app)

router.get('/add-product',(req, res, next)=>{
    
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // __dirname, '../', this is replaceed by this 'rootDir'  using the helper function in path.js file 
});

router.post('/add-product', (req,res,next)=>{
     
    console.log(req.body); 
    res.redirect('/');
});

module.exports = router // this 'router' has above two routes and it gets expoted . And we will import this into the app js file 

//when we use router.get('/' .....), the exact matching of the urlis done. That is for node using app.get request '/'  and '/abc' are not same 
// this is unline using app.use for whihc '/' and '/abc' are same  