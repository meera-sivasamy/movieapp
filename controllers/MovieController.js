const { response } = require('express');
const { findByIdAndUpdate } = require('../models/Movie');
const Movie = require('../models/Movie')

//Show the list of Movies
const index = (req, res, next) => {
    Movie.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

//Show single movie
const show = (req, res, next) => {
    let movieID = req.body.movieID
    Movie.findById(movieID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:  'An error Occured!'
        })
    })
}

//add new movie
const store = (req, res, next) => {
    let movie = new Movie({
        MovieName: req.body.MovieName,
        Rating: req.body.Rating,
        Cast: req.body.Cast,
        Genre: req.body.Genre,
        ReleaseDate: req.body.ReleaseDate
    })
    movie.save()
    
    .then(response => {  
        res.json({
            message: 'movie add successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}

//update an movie
const update = (req, res, next) => {
    let movieID = req.body.movieID

    let updatedData = {
        MovieName: req.body.MovieName,
        Rating: req.body.Rating,
        Cast: req.body.Cast,
        Genre: req.body.Genre,
        ReleaseDate: req.body.ReleaseDate
    }

    Movie.findByIdAndUpdate(movieID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Movie successfully update'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

//delete an movie
const destroy = (req, res, next) => {
    let movieID = req.body.movieID
    Movie.findByIdAndRemove(movieID)
    .then(() => {
        res.json({
            message: 'movie deleted successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}
module.exports = {
    index, show, store, update, destroy
}