const Sequelize = require('sequelize') // Sequelize is a constructor fn 

const sequelize = require('../util/database'); // importin dabas epool managed by sequelize from th databse file. 


//below code is to define a new model 
const Expense = sequelize.define('expense', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  amount: Sequelize.DOUBLE,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
});

module.exports = Expense;