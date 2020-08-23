const {Router} = require('express')
const passport = require('passport')

const {catchAsync} = require('../middlewares/errors')
const authController = require('../controllers/authController')


const authRouter = () => {
  const api = Router()

  api.post('/login', passport.authenticate('local', {session: false}), authController.login)

  api.post('/register', authController.register)

  return api
}

module.exports = authRouter