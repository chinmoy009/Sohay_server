const { JsonWebTokenError } = require("jsonwebtoken")

var jwt = require('jsonwebtoken');

exports.generateToken = user => {
    return jwt.sign({
        _id: user._id ,
        name: user.email,
        isAdmin: user.isAdmin
    }, 
    process.env.JWT_SECRET || "somethingSecret", 
    {
        expiresIn: '30d'
    })
}