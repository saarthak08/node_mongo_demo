const express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); 

const isDevelopment=process.env.ENV==='development';
const app = express();


let port = 1234;

if(isDevelopment) {
  port=1234;
}
else {
  port=3000;
}

mongoose.connect('mongodb://mongo:27017/test', { useNewUrlParser: true,useUnifiedTopology: true  });
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

