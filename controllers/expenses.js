const Expense = require('../models/expense');

exports.postAddExpense = async (req, res, next) => {
    try {
        const amount = req.body.Amt;
        const desc = req.body.Dsc;
        const cat = req.body.Cat;
        const data = await Expense.create({ amount : amount, description: desc, category : cat })
        res.status(201).json({ newExpenseDetail: data });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
}
exports.postDeleteExpense = (req, res, next) => {
    try {
        console.log("test")
        console.log(req.body.id);
        Expense.destroy({
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
        })
    }
}
exports.postEditExpense = (req, res, next) => {
    try {
        console.log("test")
        console.log(req.body.id);
        Expense.destroy({
            where: {
              id: req.body.id
            }
        })
        .then(() => {
          console.log('Entry deleted successfully for editing');
        })
        .catch(err => {
          console.error('Error deleting entry:', err);
        });

        res.status(201).send('OK');

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
}

exports.getExpense = async (req, res, next) => {
    try {
    Expense.findAll()
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
}