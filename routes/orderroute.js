import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import orderModel from '../models/order';



app.get('/getorder', (req, res) => {
    orderModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
})


app.post('/postorder', async (req, res) => {
    const user = req.body
    const newUser = new orderModel(user);
    await newUser.save();
    res.json(user);

});