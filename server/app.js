const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const passportConfig = require('./config/passportConfig')
const authRouter = require('./routes/authRouter')

//passport config
passportConfig()

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false}))
app.use(express.json({}))

// Routes
app.use('/api/auth', authRouter())

app.get('/', (req, res) => {
  res.send('server is up and runin')
})


module.exports = app 