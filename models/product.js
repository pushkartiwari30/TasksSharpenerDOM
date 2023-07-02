const Sequelize = require('sequelize') // Sequelize is a constructor fn 

const sequelize = require('../util/database'); // importin dabas epool managed by sequelize from th databse file. 


//below code is to define a new model 
const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description:{
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;