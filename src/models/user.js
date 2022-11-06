import pkg from 'mongoose'
const {Schema, model} = pkg
const UserSchema = Schema({
  APIKey: {
    type: String,
    required: [true, 'APIKey must be provided'],
  },
  SecretKey: {
    type: String,
    required: [true, 'SecretKey must be provided'],
  },
  email: {
    type: String,
    required: false,
    default: '',
  },
})

UserSchema.methods.toJSON = function () {
  const {__v, _id, APIKey, SecretKey, email, ...user} = this.toObject()
  user.uid = _id
  return user
}

export default model('User', UserSchema)
