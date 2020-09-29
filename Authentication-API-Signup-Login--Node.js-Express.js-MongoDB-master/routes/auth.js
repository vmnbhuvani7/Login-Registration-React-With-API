const routes = require('express').Router();

const userModel = require('../models/user');


//validation function import
const { userValidation, loginValidation } = require('../validation');


// password Hash
const bcrypt = require('bcryptjs');


// JsonWebToken
const jwt = require('jsonwebtoken');
const user = require('../models/user');

// Inside validation.js

// const Joi = require('joi');


// const  schema = Joi.object({
//     name: Joi.string()
//         .min(1)
//         .required(),

//     email: Joi.string()
//         .min(6)
//         .required()
//         .email(),

//     password: Joi.string()
//         .min(3)
//         .required()
// })


routes.post('/', async (req, res) => {

    console.log('working');
    // const {errors} = joi.validate(req.body, schema);

    const { error } = userValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check email is exist or not

    const emailExist = await userModel.findOne({ email: req.body.email });

    if (emailExist) { return res.send('Email is Already Exist') };


    // Hash Password
    const salt = await bcrypt.genSalt(1);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);


    let userInsert = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: hashedpassword
    });

    try {
        const saveuser = await userInsert.save();
        res.send(saveuser);
    } catch (error) {
        res.status(400).send(error);
    }

});



routes.post('/login', async (req, res) => {

    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const findUser = await userModel.findOne({ email: req.body.email });

    if (!findUser) {
        return res.status(400).send('Email Not Found');
    }

    const validPassword = await bcrypt.compare(req.body.password, findUser.password)
    if (!validPassword) {
        return res.status(400).send('Password Is Wrong');
    }

    const token = jwt.sign({ _id: findUser._id }, 'shatishdesai');
    res.header('auth-token', token).send(token);

});

module.exports = routes;
