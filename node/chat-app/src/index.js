import express from 'express'
import { createServer } from 'http'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { Server } from 'socket.io'
import { Filter } from 'bad-words'
import generateMessage from './utils/messages.js'
import generateLocationMessage from './utils/locationMessages.js'

const app = express()
const server = createServer(app)
const io = new Server(server)

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(join(__dirname, '../public')))

io.on('connection', (socket) => {
  console.log('New websocket connection')

  socket.emit('message', generateMessage('Welcome!'))
  socket.broadcast.emit('message', generateMessage('A new user has joined!'))

  socket.on('sendMessage', (message, callback) => {
    const filter = new Filter()

    if (filter.isProfane(message)) {
      return callback('Profanity is not allowed')
    }
    callback()
    io.emit('message', generateMessage(message))
  })

  socket.on('sendLocation', ({ lat, long }, callback) => {
    io.emit(
      'locationMessage',
      generateLocationMessage(`https://google.com/maps?q=${lat},${long}`)
    )
    callback()
  })
})

server.listen(3000, () => {
  console.log('server running at http://localhost:3000')
})
