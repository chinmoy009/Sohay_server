var express = require('express');
// import express from 'express';
var router = express.Router();
var data = require('./../data.js');
var User = require('./../models/userModel');
var expressAsyncHandler = require('express-async-handler');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/seed', 
  expressAsyncHandler(async (req, res, next) => {
      // await User.remove({});
      const createdUsers = await User.insertMany(data.data.users);
      res.send({ createdUsers })
}))

module.exports = router;
