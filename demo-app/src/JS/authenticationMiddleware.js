const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const env = require('../config/env');
const secretKey = env.secretKey

const authenticate = (req, res, next) => {
    const header = req.headers['authorization'];
    if(!header) {
        return res.status(401).json({ message: 'No token provided' });

    }
    const token = header.split(' ')[1];
    jwt.verify(token,secretKey, (err, user) =>{
        if(err){
            return res.status(403).json({message: "Invalid token"});
        }
        req.user = user;
        next();
    });
}

const authorization = (...authorizedRoles) => {
        return (req,res,next) =>{
            if(!req.user || !req.user.role || !authorizedRoles.includes(req.user.role)){
                return res.status(403).json({message: "Access denied"});
            }
            next();
        }
    }

    // Middleware to check if the user is authenticated

    app.get('/protected',authenticate,(req, res) => {
        res.status(200).json({ message: 'This is a protected route', user: req.user.userName });       
    })

    // Middleware to check if the user is authorized
    app.post('/admin', authenticate, authorization('admin'), (req, res) => {
        res.status(200).json({ message: 'This is an admin route', user: req.user.userName });
    })
    app.listen(3000);

//User JSON Web Token (JWT) authentication
// const obj = {
//     id: 1,
//     userName: 'admin',
//     role: 'admin'
// }