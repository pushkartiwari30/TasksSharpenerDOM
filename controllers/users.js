const path = require('path');
const rootDir = require('../util/path');
User = require('../models/user');

exports.postAddUser= async (req, res, next) => {
    try {
        if (!req.body.Phone) {
            throw new Error('Phone Number is Mandatory!')
        }
        //console.log("In the middleware!");
        const name = req.body.Name;
        const email = req.body.Email;
        const phonenumber = req.body.Phone;
        const data = await User.create({ name: name, email: email, phonenumber: phonenumber })
        res.status(201).json({ newUserDetail: data });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
}

exports.getUsers = (req, res, next) => {
    try {
        // code to get the data from the DB
        User.findAll()
            .then((data) => {
                res.status(201).json({ data });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        //sending the data to the fronend after getting it from the DB

        // code to display data will be in the front end

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        
        console.log(req.body.email);
        User.destroy({
            where: {
              email: req.body.email
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