const express = require('express');
const bodyParser = require('body-parser');

const app = express();  

// the parsing of the body ahould be done before all the routing code 
// for this to work we need to install a 3rd Party Package into production dependency: body-parser   
app.use(bodyParser.urlencoded({extended: false}));


app.use('/',(req, res, next)=>{
    //console.log("This always runs for any URL");
    next();
});
app.use('/add-product',(req, res, next)=>{
    //console.log("In the another middleware!");
    res.send('<html><h2>Enter the Product Name and the Size</h2><form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>'); 
});
// the above middle ware will be executed if url of the browser is : http://localhost:3000/add-product
// action tell the path(url) to whcih the request is to be send 

app.post('/product', (req,res,next)=>{
    //getting the body of my incoming  request by extrcting what the user sent me 
    console.log(req.body); //getting body of a request directly is a new feature of express. 
    //But using this functionality the rquest does not by default parse the incoming request body .So we need a parser 

    // we need to redirect (here log the data to the console )
    res.redirect('/');
})

// app.get == app.use but app.get() will only be fired for a GET request 
// app.post == app.use but app.post() will only be fired for a POST request
// we also have app.delete/patch/put 

//Actual format of app.use ==>  app.use([path,]callback[,callback...])
app.use('/',(req, res, next)=>{
    //console.log("In the another middleware!");
    res.send('<h1>Hello From Express</h1>'); 
});



// refering to the above middelware , the path '/' signifies anypath starting from '/' . So for node '/' and '/addproduct'are same
app.listen(3000);