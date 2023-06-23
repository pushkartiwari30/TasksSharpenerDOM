const path = require('path'); // another core module to get the path 

const express = require('express');

const rootDir = require('../util/path'); // here we re importing the expoted data of path.js file

const router = express.Router();

router.get('/contact',(req, res, next)=>{               // we are putting this riuting ina  separate file because we want th home page of our app to be in a separate file 
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));    // This sendFile keyoword is used to send files as a response  We can also use '..' 
});
router.post('/contact', (req,res,next)=>{
     
    console.log(req.body); 
    res.redirect('/message');
});

module.exports = router;