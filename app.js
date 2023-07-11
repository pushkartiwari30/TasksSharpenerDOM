const express = require('express');
const sequelize = require('./util/database');
const bodyParser = require('body-parser');
const Todo = require('./models/todo');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.get('/get-todo', async (req, res, next) => {
    try {
        Todo.findAll()
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


app.post('/add-todo', async (req, res, next) => {
    try {
        console.log(req.body);
        const todo = req.body.taskvalue;
        const desc = req.body.descvalue;
        const flag = req.body.flag;
        const data = await Todo.create({ todo: todo, description: desc, flag: flag });
        res.status(201).json({ newTodoDetail: data });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
});
app.post('/delete-todo', async (req, res, next) => {
    try {
        console.log("test")
        console.log(req.body.id);
        Todo.destroy({
            where: {
                id: req.body.id
            }
        })
            .then(() => {
                console.log('Entry deleted successfully');
            })
            .catch(err => {
                console.error('Error deleting entry:', err);
            });

        res.status(201).send('OK');
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
});




app.post('/edit-todo', (req, res, next) => {
    try {
        console.log("test")
        console.log(req.body.id);

        Todo.update(
            {
                flag: true
            },
            {
                where: { id: req.body.id }
            }
        )
            .then(rowsUpdated => {
                console.log(`Rows updated: ${rowsUpdated}`);
            })
            .catch(err => {
                console.error(err);
            });

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