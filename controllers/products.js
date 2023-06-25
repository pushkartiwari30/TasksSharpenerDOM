//so now we have pasted the controller logic blow from the admin.js file. And we will export this to admin.js file as a finction for execution. 

const Product = require("../models/product");
const Contact = require("../models/contacts");

const path = require('path');
const rootDir = require('../util/path'); // here we re importing the expoted data of path.js file
exports.getAddProduct = (req, res, next)=>{
    
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // __dirname, '../', this is replaceed by this 'rootDir'  using the helper function in path.js file 
}

exports.postAddProduct = (req,res,next)=>{
    //console.log(req.body.title); 
    const product = new Product(req.body.title);  // creating instance of a class (object )
    product.save();  // calling method of that clas on the object created whih saves the object in an array  
    //console.log(req.body.title); 
    res.redirect('/');
}

exports.getContact = (req, res, next)=>{               // we are putting this riuting ina  separate file because we want th home page of our app to be in a separate file 
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));    // This sendFile keyoword is used to send files as a response  We can also use '..' 
}

exports.postContact = (req,res,next)=>{
    const contact = new Contact(req.body.title);  // creating instance of a class (object )
    contact.save();  // calling method of that clas on the object created whih saves the object in an array  
    //console.log(req.body.title);
    //console.log(req.body); 
    res.redirect('/message');
}

exports.getMessage = (req, res, next)=>{               // we are putting this riuting ina  separate file because we want th home page of our app to be in a separate file 
    res.sendFile(path.join(rootDir, 'views', 'message.html')); 
    //console.log("Form Submitted")
}

exports.getShop = (req, res, next)=>{               // we are putting this riuting ina  separate file because we want th home page of our app to be in a separate file 
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));    // This sendFile keyoword is used to send files as a response  We can also use '..' 
}   