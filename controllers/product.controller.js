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
        if (err) {
            return next(err);  //next returns an object with two fields: done - boolean and value
        }
        res.send("Product created successfully!");
    });
};


exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            return next(err);
        }
        res.send(product);
    });
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, function (err, product) {
        if (err) {
            return next(err);
        }
        res.send('Product updated!');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.get_all_products = function (req, res) {
    Product.find({}, function(req,users) {
        if(err) {
            return next(err);
        }
        res.send(users);
    });
};