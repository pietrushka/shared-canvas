const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const router = require('./router')

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
} = require('./users.js')

const PORT = process.env.PORT || 4000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(router)

//Run when client connects
io.on('connection', onConnection);

function onConnection(socket){
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
}

server.listen(PORT, () => console.log(`server runnin on port 4000`))

