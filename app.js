const express = require('express');
const bodyParser = require('body-parser');

const app = express();  

const loginRoutes = require('./routes/login');  
const chatRoutes = require('./routes/chat');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/login',loginRoutes); // '/login' acts like a filter. Only routs starting with '/login' willl go into the loginRoutes file 
// so our url:localhost:3000/add-product now has become url : localhost:3000/login/add-product
// url:localhost:3000/add-product will lead to error 404  page 
app.use(chatRoutes);


//below code is to handle random urls eg. '/abcdxz' or any un routed url. So in such case, 404 eoor should be diplayed on the browser. That is page not found
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not found</h1>');
    // .status is anothe rmehod given by exoressjs. the  .send method has to be at the end of the chain
});

app.listen(4000);



