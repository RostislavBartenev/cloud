require('dotenv').config()
const mongoose = require('mongoose')

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: true,
  poolSize: 10,
  bufferMaxEntries: 0,
}

const dbConnectionURL = process.env.MONGO_DB

const dbConnect = () => {
  mongoose.connect(dbConnectionURL, options, (err) => {
    if (err) return console.log(err)
    console.log('DB connected')
  })
}

module.exports = dbConnect
