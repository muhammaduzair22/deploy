import mongoose, { Schema } from "mongoose";

const order = new mongoose.Schema({
    id: { type: String, required: true },
    date: { type: String, required: true },
    restaurantPassword: { type: String, required: true },
    movie: { type: Schema.Types.Objectid, ref: 'Movie' }
});

const orderModel = new mongoose.model("order", order);

export default orderModel;
