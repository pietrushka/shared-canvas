const mongoose = require("mongoose");
const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required!"],
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Provide a valid email']
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      minlength: 8
    },

})

const User = mongoose.model('User', userSchema);

module.exports = User;