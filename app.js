const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const app = express();
const User = require('./models/user');
var cors = require('cors');
app.use(cors());

const addUserRoute = require('./routes/add-user');
const deleteUserRoute = require('./routes/get-user');
const getUserRoute = require('./routes/delete-user');

app.use(bodyParser.json({ extended: false }));

//Routing. 
app.use(getUserRoute);

app.use(addUserRoute);

app.use(deleteUserRoute);

//We will need to add code to check if table exist and if not then creating a table. 
sequelize
    .sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })

