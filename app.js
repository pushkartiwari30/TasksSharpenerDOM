const express = require('express');
const bodyParser = require('body-parser');

const app = express();  

const adminRoutes = require('./routes/admin'); // this 'adminRoutes' is actually a valid middleware fn 
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes); // '/admin' acts like a filter. Only routs starting with '/admin' willl go into the adminRoutes file 
// so our url:localhost:3000/add-product now has become url : localhost:3000/admin/add-product
// url:localhost:3000/add-product will lead to error 404  page 
app.use(shopRoutes);
// for the above 2 lines of code the order matters since both are middlewares 

//below code is to handle random urls eg. '/abcdxz' or any un routed url. So in such case, 404 eoor should be diplayed on the browser. That is page not found
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not found</h1>');
    // .status is anothe rmehod given by exoressjs. the  .send method has to be at the end of the chain
})


app.listen(3000);



