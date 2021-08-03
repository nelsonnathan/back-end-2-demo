const movies = require('./db.json');
let id = 11;

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },

    deleteMovie: (req, res) => {
        let index = movies.findIndex(movie => movie.id === +req.params.id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },

    addMovie: (req, res) => {
        let {title, rating, imageURL} = req.body
        let newMovie = {
            id,
            title,
            rating,
            imageURL
        }
        movies.push(newMovie)
        id++
        res.status(200).send(movies)
    },

    updateMovie: (req, res) => {
        let {id} = req.params
        let {type} = req.body

        let index = movies.findIndex(movie => movie.id === +id)
        if (movies[index].rating === 5 && type === 'plus') {
            res.status(400).send('cannot go above 5')
        } else if (movies[index].rating === 0 && type === 'minus') {
            res.status(400).send('cannot go below 0')
        } else if (type === 'plus') {
            movies[index].rating++
            res.status(200).send(movies)
        } else if (type === 'minus') {
            movies[index].rating--
            res.status(200).send(movies)
        } else {
            res.sendStatus(400)
        }
    }
}