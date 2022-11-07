/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
import cors from 'cors';

import mongoose from 'mongoose';

import UserModel from './models/users.js';

//const UserModel = require ('./models/Users')

// Importing user route
// import router from './routes/admin.js';

// const router = require('router')

// const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(express.json())
app.use(cors());

// Adding a Router
// const CustomerRouter = require('./routes/customer')
// const AdminRouter = reqiure('./routes/admin')

// import CustomerRouter from './routes/customer.js';
// import AdminRouter from './routes/admin.js';


// app.use('/admin', AdminRouter);
// app.use('/customer', CustomerRouter);

mongoose.connect("mongodb+srv://uzair:8951dd7c@cluster0.iafpeyy.mongodb.net/info?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Successfully connected")
    }
})


app.get('/getUsers', (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
})

app.post('/postUser', async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

