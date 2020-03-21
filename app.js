const express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const product = require('./routes/product.route'); 
let port = 1234;


mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true,useUnifiedTopology: true  });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Database connection open");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/products', product);

app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
});

