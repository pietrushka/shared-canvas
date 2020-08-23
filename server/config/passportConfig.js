const passport = require('passport')
const passportJWT = require('passport-jwt')

const User = require("../models/userModel");


const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

//check if user with this id exists
const verifyCallback = (payload, done) => {
  return User.findOne({_id: payload.id})
        .then(user => {
            return done(null, user)
        })
        .catch(err => {
            return done(err)
        })
}

const passportConfig = () => {
  const config = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  } 

  // dispatch strategy to passport, we can use model.createStrategy(), becouse we use passportLocalMongoose
  passport.use(User.createStrategy())

  //dispatch jwt strategy
  passport.use(new JWTStrategy(config, verifyCallback))
}

module.exports = passportConfig