import mongoose from "mongoose";

const movie = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: String, required: true },
    rating: { type: String, required: true },
    genre: { type: String, required: true },
    poster: { type: String, required: true },
});

const movieModel = new mongoose.model("movie", movie);

export default movieModel;
