const express = require('express');
const port = 8000;

const db = require('./config/mongoose');
const Task = require('./models/task');

const app = express();
app.use(express.urlencoded());

//use express router
app.use('/', require('./routes/index'));
app.use(express.static('assets'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port, function(err) {
    if (err) {
        console.log(`Error in running the server on port : ${port}`);
    }
    console.log(`Server is up and running on port : ${port}`);
});