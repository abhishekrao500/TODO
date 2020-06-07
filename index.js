const express = require('express');
const app = express();
const port = 8000;


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
})