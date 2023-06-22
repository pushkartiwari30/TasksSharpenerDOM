const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{               // we are putting this riuting ina  separate file because we want th home page of our app to be in a separate file 
    res.send('<h1>Hello From Express</h1>');  
});

module.exports = router;