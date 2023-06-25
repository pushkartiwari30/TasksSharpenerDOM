fs = require('fs');
const path = require('path');
// in the below code line we are creating a path of the file for storing the data into the products.json file  
const p = path.join(path.dirname(process.mainModule.filename),
'data',
'products.json'
);

const getProductsFromFile = cb => {  // initilly there were 2 read files so we use this helper fn to make the reading code inot 1 function to make the code clean 
    
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]); // if no file exist --> error --> we will return an empty array to festchAll since fetchAll expcest a array retunr form. 
        }
        else{
            cb(JSON.parse(fileContent)); // if no error then return the data and parseing it before returning 
        }
    });
}
const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    save() {
        
        getProductsFromFile(products =>{
            // then we will push the newly creted object into the products 
            products.push(this); //mak sure to use arrow fn in the file read fn above or else the 'this' eyword will not point to the class
            // now we will save the newly created/ edited products variable into the file 
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
        
    }
    static fetchAll(cb) {
    // this was the lcation of the callbak fn that we put in the helper fn getProductsFromFile
    getProductsFromFile(cb)
    }
}