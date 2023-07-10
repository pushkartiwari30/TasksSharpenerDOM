const express = require('express');
const sequelize = require('./util/database');
const bodyParser = require('body-parser');


const app = express();
const cors = require('cors');
app.use(cors());

const addExpenseRoute = require('./routes/add-expense');
const deleteExpenseRoute = require('./routes/delete-expense');
const editExpenseRoute = require('./routes/edit-expense');
const getExpenseRoute = require('./routes/get-expense');


app.use(bodyParser.json({ extended: false }));

app.use(getExpenseRoute);

app.use(addExpenseRoute);

app.use(deleteExpenseRoute);

app.use(editExpenseRoute);

//We will need to add code to check if table exist and if not then creating a table. 
sequelize
    .sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })