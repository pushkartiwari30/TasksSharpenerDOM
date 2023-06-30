const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/database')// this code will help us reach out to the database file we just created  . Thsi si the pool that we exported . We are imorting it here

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

db.execute('SELECT * FROM products'); // inbuild command for the pool of requets by mysql. 
//'producst is a dat table that we created in mysql workbench'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
