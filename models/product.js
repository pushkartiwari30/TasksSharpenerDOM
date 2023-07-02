// we will imort the pool object from the dabase.js file 
const db =require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.imageUrl, this.description]
    ); // we dont specify id becayse it will be set automatilalay since it is set as aito increment
    // ? ? ? ?    is a way to avoide sql injcettion attck 
    // in the array(2nd argument) we will put the values we would have put in the VALUES(_, _. _. _)
  }

  static deleteById(id) {
    return db.execute('DELETE FROM products WHERE products.id = ?', [id]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products'); //so fetchAll will return a promise where it is called. We call it in the shop js file of contoller
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  }
};
