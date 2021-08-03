const express = require('express')
const cors = require('cors')
const controller = require('./controller')

const port = 4004


const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/movies', controller.getMovies)

app.listen(port, () => console.log('Why do we fall, Bruce? So we can learn to pick ourselves back up.'))