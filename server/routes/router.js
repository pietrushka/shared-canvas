const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('server is up and runin')
})

app.use('/api/auth', authRouter)

module.exports = router