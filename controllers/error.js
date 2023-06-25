const path = require('path');
const rootDir = require('../util/path'); 
exports.get404 = (req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html')); // here we need not pass the 2nd argument of '../' because we are already in the main(root) folder
}