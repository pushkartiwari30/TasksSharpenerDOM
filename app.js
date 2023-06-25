const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();  

const adminRoutes = require('./routes/admin'); // this 'adminRoutes' is actually a valid middleware fn 
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const messageRoutes = require('./routes/message');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))); //static keyword serves static files . We will use it to serve static files. We will pass in the path to the folder we wnto sev statically
// we pass in path to a fn which we want users to have read access to, through the path of that folder in browser. here the css file 

app.use('/admin',adminRoutes); 
app.use(shopRoutes);
app.use(contactRoutes);
app.use(messageRoutes);
// for the above 2 lines of code the order matters since both are middlewares 

//below code is to handle random urls eg. '/abcdxz' or any un routed url. So in such case, 404 eoor should be diplayed on the browser. That is page not found

app.use(errorController.get404)


app.listen(3000);



