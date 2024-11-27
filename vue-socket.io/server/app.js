/** SERVER */
import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const port = 3000
const portio = 3001
const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:5173'],
    // allowedHeaders: ['Access-Control-Allow-Origin'],
    // credentials: true,
  },
})

// Маршруты HTTP
app.get('/', async (req, res) => {
  return res.send(123)
})

app.listen(port, async () => {
  console.log('Server started on port 3000')
})

// Запуск сокет-сервера
io.on('connection', (socket) => {
  console.log('Client connected ', socket)
})
httpServer.listen(portio)
