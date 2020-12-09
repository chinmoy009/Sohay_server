var express = require('express');
var {data} = require('../data.js');

var router = express.Router();


router.get('/', (req, res, next) => {
    res.json(data);
});

module.exports = router;

// var express = require('express');
// // import express from 'express';
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;