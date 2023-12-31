const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new Schema(
  {

    username: {
      type: String,
      required: [true, 'Username is required.'],
      minlength: [3, 'Username must be 2 characters length'],
      maxlength: [10, 'Username must be 10 characters length']

    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      lowercase: true,
      trim: true,
      unique: true,
    },

    password: {
      type: String,
      required: [true, 'Password is required.'],
      minlength: [3, 'Min 3 character'],
    },

  }, {
  timestamps: true,
}

)

userSchema.pre('save', function (next) {
  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword
  next()
})

userSchema.methods.signToken = function () {
  const { _id, username, email } = this
  const payload = { _id, username, email }

  const authToken = jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    { algorithm: 'HS256', expiresIn: "6h" }
  )
  return authToken
}
userSchema.methods.validatePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password)
}

const User = model("User", userSchema);
module.exports = User;

