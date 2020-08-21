const express = require('express')
const passport = require("passport")
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require("express-session")
const passportLocal = require("passport-local").Strategy

const userRouter = require('./routes/userRouter')


const app = express()
app.use(cors())

app.use(express.urlencoded({ extended: false}))
app.use(express.json({}))
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
)
app.use(cookieParser("secretcode"))
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// Routes
app.use('/users', userRouter)

app.get('/', (req, res) => {
  res.send('server is up and runin')
})


module.exports = app 