// code to connect to the sql database and to give back object and gie back connection object whihc alows us yo run quesries 

const mysql = require('mysql2') //mysql2 is the newert version of the sqll that we download too 

// ideally we use a pool of connections instead of a singel connecton bet the node and the datavbase 
// in  hsort theis pool of connection helps us execute multiple quesry operations withut terminaing the conncetion.  
// the connection terminates when our application shuts down 


const pool = mysql.createPool({
    // we need to pass in a JS object with the info about the datbase engine/ host we are connecting to 
    host: 'localhost', 
    user: 'root', // this we defined duing the installation 
    databse: 'node-complete', // this is the schema name 
    password: 'mysql@3001' // thr passwrd we assigned during installtion 
});

module.exports = pool.promise();
// above code will allow us to use promises when working with these connections 