const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

const app=express();

router.get('/test', product_controller.test);

router.post('/create', product_controller.product_create);

router.put('/:id/update',product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);

router.get('/list',product_controller.get_all_products);

router.get('/name/:_name',product_controller.find_by_name);

router.get('/:id', product_controller.product_details);


module.exports = router;