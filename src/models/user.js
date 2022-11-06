const {Schema, model} = require('mongoose')

const UserSchema = Schema({
  APIKey: {
    type: String,
    required: [true, 'APIKey must be provided'],
  },
  SecretKey: {
    type: String,
    required: [true, 'SecretKey must be provided'],
  },
})

UserSchema.methods.toJSON = function () {
  const {__v, _id, APIKey, SecretKey, ...user} = this.toObject()
  user.uid = _id
  return user
}

module.exports = model('User', UserSchema)
