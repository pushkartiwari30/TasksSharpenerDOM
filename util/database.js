const Sequelize = require('sequelize')// this returna  a cpnstructor fn so Sequelize is a constructor fn 

const sequelize = new Sequelize('node-complete', 'root', 'mysql@3001', {
    dialect: 'mysql',
    host: 'localhost'
}); // this is an instance of the constructor fn or we can we are creatong a new sequelize object 
// this object will be automticlly be conencted o the datbase or to be precise, it will set up a connection pool like in prev task 


module.exports = sequelize;