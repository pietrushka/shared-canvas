const mongoose = require('mongoose')
const socketio = require('socket.io')
const dotenv = require('dotenv');

const PORT = process.env.PORT || 4000


dotenv.config({ path: './config.env' })
const app = require("./app");

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => console.log('DB connection successful'))

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})


const io = socketio(server)


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
