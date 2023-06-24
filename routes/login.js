const fs = require('fs');

const express = require('express');
const router = express.Router(); // this Router is like a mini express app tied to the other express app ( pluagble into other express app)

router.get('/username',(req, res, next)=>{
    res.send(`<html><h2>Enter the User Name </h2>
    <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login/username"  method="POST">
        <input id="username" type="text" name="username" >
        <button type="submit">Login</button>
    </form>`); 
});

router.post('/username', (req,res,next)=>{
    console.log("request of login page is : ")
    console.log(req.body.username); 
    
    res.redirect('/chat');
});

module.exports = router // this 'router' has above two routes and it gets expoted . And we will import this into the app js file 

//when we use router.get('/' .....), the exact matching of the urlis done. That is for node using app.get request '/'  and '/abc' are not same 
// this is unline using app.use for whihc '/' and '/abc' are same  