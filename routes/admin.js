import orderModel from '../models/order';
import movieModel from '../models/movie';
const router = require('express').Router();

router.route('/add').post((req, res) => {
    const id = Number(req.body.Id);
    const title = req.body.title;
    const year = Number(req.body.Rating);
    const genre = req.body.genre;
    const newMovie = new movieModel({
        id,
        title,
        year,
        genre,
    });
    newMovie.save().then(() => res.json('Movie added!')).catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    movieModel.findById(req.params.id).then(movie => {
        movie.id = Number(req.body.Id);
        movie.title = req.body.title;
        movie.year = Number(req.body.Rating);
        movie.genre = req.body.genre;

        newMovie.save().then(() => res.json('Movie updated!')).catch(err => res.status(400).json('Error: ' + err));
    })
        .catch(err => res.status(400).json('Error: ' + err));
})

