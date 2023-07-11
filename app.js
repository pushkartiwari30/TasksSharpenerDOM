const express = require('express');
const sequelize = require('./util/database');
const bodyParser = require('body-parser');
const Candy = require('./models/candy');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.get('/get-candy', async (req, res, next) => {
    try {
    Candy.findAll()
        .then((data) => {
            //console.log(data);
            res.status(201).json({ data }); //sending the data to the fronend after getting it from the DB
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
})


app.post('/add-candy', async (req, res, next) => {
    try {
        const candy = req.body.Candy;
        const desc = req.body.Dsc;
        const price = req.body.Price;
        const quantity = req.body.Qty;
        const data = await Candy.create({ candy: candy, description: desc, price: price, quantity: quantity });
        res.status(201).json({ newExpenseDetail: data });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
});


app.post('/edit-candy', (req, res, next) => {
    try {
        console.log("test")
        console.log(req.body.id);
        if(req.body.lessBy ==1 ){
            Candy.decrement('quantity', { by: req.body.lessBy, where: { id: req.body.id } })
            .then(res => {
                console.log(`Price increased by 1 for Candy`);
                //console.log(`New price: ${updatedCandy.price}`);
                console.log(res);
            })
            .catch(err => {
                console.log(`Error increasing price for Candy : ${err}`);
            });
        }
        else if(req.body.lessBy ==2 ){
            Candy.decrement('quantity', { by: req.body.lessBy, where: { id: req.body.id } })
            .then(updatedCandy => {
                console.log(`Price increased by 2 for Candy`);
                console.log(`New price: ${updatedCandy.price}`);
            })
            .catch(err => {
                console.log(`Error increasing price for Candy: ${err}`);
            });
        } 
        else if(req.body.lessBy ==3 ){
            Candy.decrement('quantity', { by: req.body.lessBy, where: { id: req.body.id } })
            .then(updatedCandy => {
                console.log(`Price increased by 3 for Candy `);
                console.log(`New price: ${updatedCandy.price}`);
            })
            .catch(err => {
                console.log(`Error increasing price for Candy  ${err}`);
            });
        }

        res.status(201).send('OK');

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
})

//We will need to add code to check if table exist and if not then creating a table. 
sequelize
    .sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })