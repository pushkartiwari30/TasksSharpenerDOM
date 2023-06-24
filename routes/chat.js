const fs = require('fs');
const express = require('express');
const router = express.Router();
  
router.get('/chat',(req, res, next)=>{ // we are putting this routing in a separate file because we want th home page of our app to be in a separate file 
    
    //Code to read data from message.txt file. 
    // in the below html code we will add the data to the html for displaying it into UI 
    fs.readFile('message.txt', (err,data)=>{
        if(err){
            console.log(data)
            data="No Chats Yet"
        }
        res.send(`<h2>Lets Chat </h2>${data}
        <form action="/chat" onsubmit= "document.getElementById('username').value=localStorage.getItem('username')" method="POST">
            <input type="text" name="chat" placeHolder="Type Here">
            <input type="hidden" name="username" id="username">
            <button type="submit">Send</button>
        </form>`);  
    });

    //That str value will be displayed in browser by adding it to the below html code
    
});
router.post('/chat', (req,res,next)=>{
    
    console.log(req.body); 
    
    
    let conversation =` ${req.body.username} : ${req.body.chat} ||`;
    console.log(conversation);
    //sendind chat to the message file:
    fs.writeFile('message.txt', conversation, { flag: 'a' },err => { //n the options object, we specify { flag: 'a' }, which sets the file writing mode to append (a). This ensures that the new value is added to the existing content of the file.
        if (err) {
            console.error(err);
        }
        else
        console.log('Chat added to message.txt file.');
    });

    res.redirect('/chat');
});

module.exports = router;