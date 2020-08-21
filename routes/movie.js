var express = require('express');
var router = express.Router();
var movieController = require('../controllers/movie')

router.get('/', async function (req, res, next) {
  try {
    const movie = await movieController.getMovies()
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err.message)
  }
});


router.post('/', async function (req, res, next) {
  try {
    const newMovie = await movieController.newMovieCont(req.body)
    res.status(200).json(newMovie);
  } catch (err) {
    res.status(500).json(err.message)
  }
});
module.exports = router