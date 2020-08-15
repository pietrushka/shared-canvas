const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const router = require('./router')

const PORT = process.env.PORT || 4000


const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(router)

//Run when client connects
io.on('connection', socket => { 
  console.log('user in')
  
  // Runswhen clinet disconnect
  socket.on('disconnect', () => {
    console.log('user out')
  })
})

server.listen(4000, () => console.log(`server runnin on port 4000`))

