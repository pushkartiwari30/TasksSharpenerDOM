//const http = require('http'); // this is included in app.listen(3000) method internally 

const express = require('express');

const app = express();  // th express exports a fucntion hence we store the 'express()' in 'app' 
// a lot of logic is in the const 'app'

app.use((req, res, next)=>{
    console.log("In the middleware!");
    next(); // Allows the request to continue to the next middleware in line
}) // 'use' is defined by the express framework.'use' method allows us to add a new middleware fn
//the cb fn inside the use method will be executed for all the request.
// next is another funtion tht we pass in the cb fn as a parameter
// next is executed to allow the request to go into next middleware
// we should call next () if we dont send a response otherwise the rewuest will just die and wil not continue to the next middleware
app.use((req, res, next)=>{
    console.log("In the another middleware!");
    // next()  // if there was another function below this
    res.send('<h1>Hello From Express</h1>');  // in send we can pass in any data type . Express will automatically read the type without need to  specifying
    //response is send in the last middleware. 
})
// Note: For the next() fn to execute the next function  that funtion should have 3 parameter format with last parameter is the next fn itself. 
// if we dont use next then the 2nd 'app.use' would nto have been executed. 

// const server = http.createServer(app); // the app is  avalid request handler 
// server.listen(3000);

//Instead of above 2 line of code we can write the followoing 
app.listen(3000);