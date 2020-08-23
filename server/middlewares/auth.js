const passport = require('passport')

//kinda wrapper that return middleware function
const jwtAuth = (req, res, next) => {
  return passport.authenticate('jwt', {session: false})(req, res, next)
}