const Product = require('../models/product.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
        }
    );

    product.save(function (err) {
        res.send("Product created successfully!");
    });
};


exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        res.send(product);
    });
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, function (err, product) {
        res.send('Product updated!');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        res.send('Deleted successfully!');
    })
};

exports.get_all_products = function (req, res) {
    Product.find({}, function(err,products) {
        res.send(products);
    });
};