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
io.on('connection', socket => { 
  console.log('user in')

  socket.on('join', ({name, room}, callback) => {
    const {error, user} = addUser({id: socket.id, name, room})

    if(error) return callback(error)

    socket.emit('message', {user: 'admin', text: `welcome to the room ${user.name}`})
    socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined`})

    socket.join(user.room)

    callback()
  })
  
  // Runswhen clinet disconnect
  socket.on('disconnect', () => {
    console.log('user out')
  })
})

server.listen(PORT, () => console.log(`server runnin on port 4000`))

