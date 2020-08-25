const mongoose = require('mongoose')
const dotenv = require('dotenv')

const PORT = process.env.PORT || 4000


dotenv.config({ path: './config.env' })
const app = require("./app")

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

