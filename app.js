const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const product = require('./routes/product.route'); 
let port = 1234;

app.use('/products', product);

app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
});

