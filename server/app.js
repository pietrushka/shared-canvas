const express = require('express')
const passport = require("passport")
const passportLocal = require("passport-local").Strategy;
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require("express-session")
const bcrypt = require("bcryptjs")

const User = require('./models/userModel')


const app = express()
app.use(cors())


// Body parser, reading data from body into req.body
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
app.get('/', (req, res) => {
  res.send('server is up and runin')
})

app.post("/user/login", (req, res, next) => {
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
});

app.post("/user/register", (req, res) => {
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
  });
})

app.get("/user", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
})

module.exports = app 