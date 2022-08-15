const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const movieSchema   = new Schema({
    MovieName: {
        type: String
    },
    Rating: {
        type: Number
    },
    Cast: [{
        type: String
    }],
    Genre: {
        type: String
    },
    ReleaseDate: {
        type: String,
        default: Date.now
    }

}, {timestamps: true})

const Movie = mongoose.model('Movie',movieSchema)
module.exports = Movie
