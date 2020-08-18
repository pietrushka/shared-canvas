const express = require('express')
const socketio = require('socket.io')
const jwt = require("jwt-then")

const PORT = process.env.PORT || 4000
const app = require("./app");

//const userModel = require('./models')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('DB connection successful'))

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})


const io = socketio(server)

const User = mongoose.model("User")

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.query.token
    const payload = await jwt.verify(token, process.env.SECRET)
    socket.userId = payload.id
    next()
  } catch (err) {}
})

io.on("connection", (socket) => {
  // console.log("Connected: " + socket.userId)

  // socket.on("disconnect", () => {
  //   console.log("Disconnected: " + socket.userId)
  // });

  // socket.on("joinRoom", ({ chatroomId }) => {
  //   socket.join(chatroomId)
  //   console.log("A user joined chatroom: " + chatroomId)
  // });

  // socket.on("leaveRoom", ({ chatroomId }) => {
  //   socket.leave(chatroomId)
  //   console.log("A user left chatroom: " + chatroomId)
  // });

  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
})
