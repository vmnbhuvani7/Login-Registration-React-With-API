const routes = require('express').Router();
const verify = require('./verifyToken');


const test =   routes.get('/', verify,(req, res)=>{
    res.json(req.user);
});


module.exports = test;