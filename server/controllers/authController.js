const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const authController = {
  async login(req, res, next) {
    //generate token
    const token = jwt.sign({id: req.user.id}, process.env.JWT_SECRET, {expiresIn: 3600})
    //return token to user
    return res.send({
      token
    })
  },

  async register(req, res, next) {
    const {username, email, password} = req.body
    const user = new User({username, email})

    // set user password using register method, that is available, becouse we use passportLocalMongoose
    await User.register(user, password)

    res.send('User created successfully. Now you can log in')
  }
}

module.exports = authController