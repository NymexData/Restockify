
// Dependencies
var express = require('express'),
    router = express.Router();

//Product
var Product = require('../models/product');
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

// Return router
module.exports = router;
