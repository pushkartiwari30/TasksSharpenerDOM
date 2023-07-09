const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database')// this code will help us reach out to the database file we just created  . Thsi si the pool that we exported . We are imorting it here

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); 

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize 
    .sync()
    .then(result =>{
        // console.log(result);
        app.listen(3000);
    })
    .catch(err =>{
        console.log(err);
    })
    // the sync method id aware of all the models that i defined in sequelize in models folder; product.js file and based on the models defined by us in that file, it created tables for them in the datbse 
// the sync method syncs the models to the databse by creatin g the appropruate tables (and relations) 

//app.listen(3000); this is moved up into seqelize. This means that sevr wil start only after the table has been created 
