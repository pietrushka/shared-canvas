const passport = require("passport")
const passportLocal = require("passport-local").Strategy
const bcrypt = require("bcryptjs")

const User = require('../models/userModel')

exports.register = (req, res, next) => {
  const {email, username, password} = req.body
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const newUser = new User({
        email: email,
        username: username,
        password: hashedPassword
      })
      
      await newUser.save();
      res.send("User Created");
    }
  })
}

exports.login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
}