var express = require('express');

var router = express.Router();

router.get('/', (req, res, next) => {
    res.send("Server is ready to serve product list");
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