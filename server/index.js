require('dotenv').config()
const express = require('express')

const authRouter = require('./src/routes/auth.routes')

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('ok'))
app.use('/api/auth', authRouter)

module.exports = app
