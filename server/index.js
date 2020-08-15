const express = require('express')
const http = require('http')
const path = require('path')

const app = express()

//Set static folder
app.use(express.static(path.join(__dirname, '../client/build')))

const PORT = 3000 || process.env.PORT
app.listen(PORT, () => console.log(`server runnin on ${PORT}`))

