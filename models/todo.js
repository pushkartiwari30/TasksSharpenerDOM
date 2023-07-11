const Sequelize = require('sequelize') // Sequelize is a constructor fn 

const sequelize = require('../util/database'); // importin dabas epool managed by sequelize from th databse file. 

//below code is to define a new model 
const Todo = sequelize.define('todo', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  todo: Sequelize.STRING,
  description: Sequelize.STRING,
  flag: Sequelize.STRING,
  
});

module.exports = Todo;