const Sequelize = require('sequelize') // Sequelize is a constructor fn 

const sequelize = require('../util/database'); // importin dabas epool managed by sequelize from th databse file. 


//below code is to define a new model 
const Candy = sequelize.define('candy', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  candy: Sequelize.STRING,
  description: {
    type: Sequelize.STRING,
    unique: true,
  },
  price: Sequelize.DOUBLE,
  quantity: Sequelize.INTEGER,
});

module.exports = Candy;