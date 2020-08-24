
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

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id)

  // Remove password from output
  user.password = undefined

  res.status(statusCode).send({
    user,
    token
  })
}

exports.login = catchAsync( async (req, res, next) => {
  console.log(req.body)

  const { email, password } = req.body

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400))
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email }).select('+password')

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401))
  }

  console.log(user)

  //3 If everything is ok, send user data and token
  createSendToken(user, 200, req, res)
})

exports.register = catchAsync( async (req, res, next) => {
    const {username, email, password} = req.body
    const newUser = await User.create({
      username, email, password 
    })

    createSendToken(newUser, 201, req, res)
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