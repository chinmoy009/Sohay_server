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

exports.isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(authorization) {
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, process.env.JWT_SECRET || "somethingSecret", (err, decode) => {
            if(err) {
                res.status(401).send({
                    message: "Invalid token"
                });
            } else {
                req.user = decode;
                next();
            }
        })
    } else {
        res.status(401).send({
            message: "No token"
        });
    }
}