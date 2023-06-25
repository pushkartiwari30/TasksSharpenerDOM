//so now we have pasted the controller logic blow from the admin.js file. And we will export this to admin.js file as a finction for execution. 

const path = require('path');
const rootDir = require('../util/path'); // here we re importing the expoted data of path.js file
exports.getAddProduct = (req, res, next)=>{
    
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // __dirname, '../', this is replaceed by this 'rootDir'  using the helper function in path.js file 
}

exports.postAddProduct = (req,res,next)=>{
     
    console.log(req.body); 
    res.redirect('/');
}

exports.getContact = (req, res, next)=>{               // we are putting this riuting ina  separate file because we want th home page of our app to be in a separate file 
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));    // This sendFile keyoword is used to send files as a response  We can also use '..' 
}

exports.postContact = (req,res,next)=>{
     
    console.log(req.body); 
    res.redirect('/message');
}

exports.getMessage = (req, res, next)=>{               // we are putting this riuting ina  separate file because we want th home page of our app to be in a separate file 
    res.sendFile(path.join(rootDir, 'views', 'message.html')); 
    console.log("Form Submitted")
}

exports.getShop = (req, res, next)=>{               // we are putting this riuting ina  separate file because we want th home page of our app to be in a separate file 
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));    // This sendFile keyoword is used to send files as a response  We can also use '..' 
}