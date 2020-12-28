var express = require('express');
var {data} = require('../data.js');
var expressAsyncHandler = require('express-async-handler');
var Product = require('./../models/productModel');

var router = express.Router();


router.get('/', expressAsyncHandler(async (req, res, next) => {
    const products = await Product.find({});
    res.send(products);
}));



router.get('/seed', expressAsyncHandler(async (req, res, next) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
}));

router.get('/:id', expressAsyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({ messasge: "Product not found"});
    }
}));

module.exports = router;