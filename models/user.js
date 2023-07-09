const Sequelize = require('sequelize') // Sequelize is a constructor fn 

const sequelize = require('../util/database'); // importin dabas epool managed by sequelize from th databse file. 


//below code is to define a new model 
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  phonenumber: {
    type: Sequelize.STRING,
    unique: true
  }
});

module.exports = User;