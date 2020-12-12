var express = require('express');
var {data} = require('../data.js');

var router = express.Router();


router.get('/', (req, res, next) => {
    res.json(data);
});

router.get('/:id', (req, res, next) => {
    const product = data.products.find(product => product._id === req.params.id);
    if(product) {
        res.json(product);
    } else {
        res.status(404).send({message: "Products not found"});
    }
})

module.exports = router;