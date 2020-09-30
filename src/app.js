const express = require('express')
const app = express()
const cors = require('cors');

//settings
app.set('port', process.env.PORT || 4000)

//midlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/servers', require('./routes/servers'))
app.use('/api/users', require('./routes/users'))

module.exports = app