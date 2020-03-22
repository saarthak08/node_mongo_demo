const Product = require('../models/product.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res, next) {

    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
        }
    );

    product.save(function (err) {
        if (err) {
            next(err);
        }
        res.send("Product created successfully!");
    });
};


exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (product) {
            res.send(product);
        }
        else {
            console.log(err);
            res.sendStatus(404);
        }
    });
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, function (err, product) {
        if (err) {
            next(err);
        }
        else if(product==null) {
            res.sendStatus(404);
        }
        else {
            res.send('Product updated!');
        }
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        res.send('Deleted successfully!');
    })
};

exports.get_all_products = function (req, res, next) {
    Product.find({}, function (err, products) {
        if (err) {
            next(err);
        }
        res.send(products);
    });
};

exports.find_by_name = function (req, res) {
    Product.findOne({
        name: req.params._name
    }, function (err, product) {
        if (product) {
            res.send(product);
        }
        else {
            res.sendStatus(404);
        }
    });
};