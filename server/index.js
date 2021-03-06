import http from 'http'
import Debug from 'debug'
import app from './app'
import mongoose from 'mongoose'
import { mongoUrl, port } from './config'

const debug =  new Debug('platzi-overflow:root')

// const app = http.createServer((req, res) => {
//   debug('New request')
//   res.writeHead(200, {'Content-Type': 'text/plain'})
//   res.write('Hola desde PlatziOverflow')
//   res.end()
// })

mongoose.Promise = global.Promise

async function start() {
  await mongoose.connect(mongoUrl)

  app.listen(port, () => {
    debug(`Server running at port ${port}`)
  })
}

start()
