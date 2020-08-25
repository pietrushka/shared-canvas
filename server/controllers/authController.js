
const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const User = require('./../models/userModel')
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')


const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
}

exports.login = catchAsync( async (req, res, next) => {
  const { email, password } = req.body

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400))
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email }).select('+password')

  if (!user || !(await user.correctPassword(password))) {
    return next(new AppError('Incorrect email or password', 401))
  }

  const token = signToken(user._id)


  //3 If everything is ok, send user data and token
  res.status(200).send({
    id: user._id,
    username: user.username,
    token,
  })
})

exports.register = catchAsync( async (req, res, next) => {
    const {username, email, password} = req.body
    const newUser = await User.create({
      username, email, password 
    })

    res.status(201).send({
      newUser
    })
})

exports.isLoggedIn = catchAsync(async() => {
  const token = req.headers.authorization.split(' ')[1] // starts with 'Bearer'

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    )
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id)
  if (!currentUser) {
    return next(
      new AppError(
        'The user belonging to this token does not exist.',
        401
      )
    )
  }

  res.status(200).send({
    user,
    token
  })

  next()
})