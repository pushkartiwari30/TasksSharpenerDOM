// this file is used create a function which is used for getting the parent directory with the help of a helper fn 

const path = require('path');

module.exports = path.dirname(process.mainModule.filename);  // the fn 'dirname()' return the direcotry name of a path  that it is called upon 
// 'process' is a global variable 
// 'mainModule' property will refer to the main module that started our application .In our case , app.js's module
// filename will refer to the app.js in our cass]e