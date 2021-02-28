require('dotenv').config()
const express = require('express')
const cors = require('cors')

const authRouter = require('./src/routes/auth.routes')
const filesRouter = require('./src/routes/files.routes')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('ok'))
app.use('/api/auth', authRouter)
app.use('/api/files', filesRouter)

module.exports = app
