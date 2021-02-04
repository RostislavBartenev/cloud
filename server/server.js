const http = require('http')

const app = require('./index')
const db = require('./db')

const port = process.env.PORT || 3001
const host = process.env.HOST || 'localhost'


const server = http.createServer(app)

server.listen(port, host)

server.on('listening', () => {
  console.log(`Express server started at ${server.address().address}:${server.address().port}`)
})

db()


