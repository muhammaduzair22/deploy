import movieModel from '../models/movie';

app.get('/getmovie', (req, res) => {
    movieModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
})

app.post('/postmovie', async (req, res) => {
    const user = req.body
    const newUser = new movieModel(user);
    await newUser.save();
    res.json(user);

});
