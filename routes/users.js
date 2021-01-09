var express = require('express');
// import express from 'express';
var router = express.Router();
var data = require('./../data.js');
var User = require('./../models/userModel');
var bcrypt = require('bcryptjs');
var expressAsyncHandler = require('express-async-handler');
const { generateToken } = require('../utils.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/seed', 
  expressAsyncHandler(async (req, res, next) => {
      // await User.remove({});
      const createdUsers = await User.insertMany(data.data.users);
      res.send({ createdUsers })
}));

router.post('/signin', expressAsyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email  : req.body.email});
  if(user) {
    if(bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user)
      })
      return;
    }
  }
  res.status(401).send({message: "Invalid Username or Password"})
}));

router.post('/signup', expressAsyncHandler(async (req, res, next) => {
  const existingUsers = await User.find({email : req.body.email});
  if(!existingUsers || existingUsers.length == 0) {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      password: bcrypt.hashSync(req.body.password, 8)
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.username,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser)
    })
    return;
  }

  res.status(401).send({message: "Duplicate User With Same Email Address"})
}))

module.exports = router;
