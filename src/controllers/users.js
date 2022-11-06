const User = require('../models/user')
const {Spot} = require('@binance/connector')
const userGet = async (req, res) => {
  const {uid} = req.params
  const {APIKey, SecretKey} = await User.findOne({_id: uid})
  const client = new Spot(APIKey, SecretKey, {
    baseURL: process.env.BASE_URL,
  })
  try {
    const response = await client.account()
    res.json(response.data)
  } catch ({response}) {
    res.status(response.status).json(response.data)
  }
}

const usersPost = async (req, res) => {
  const {APIKey, SecretKey} = req.body
  const user = new User({APIKey, SecretKey})

  try {
    await user.save()
    res.json(user)
  } catch (error) {
    res.json(error)
  }
}

module.exports = {
  userGet,
  usersPost,
}
