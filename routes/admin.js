// we will utsource routing to the routes folder instaed of app.js file( that we did in task 2 )
// we are slowly going towards an online shop 
// this admin.js will hold the routes that leads to creation of the products 

const express = require('express');
const router = express.Router(); // this Router is like a mini express app tied to the other express app ( pluagble into other express app)

router.get('/add-product',(req, res, next)=>{
    
    res.send('<html><h2>Enter the Product Name and the Size</h2><form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>'); 
});

router.post('/add-product', (req,res,next)=>{
     
    console.log(req.body); 
    res.redirect('/');
});

module.exports = router // this 'router' has above two routes and it gets expoted . And we will import this into the app js file 

//when we use router.get('/' .....), the exact matching of the urlis done. That is for node using app.get request '/'  and '/abc' are not same 
// this is unline using app.use for whihc '/' and '/abc' are same  