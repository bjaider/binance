import User from '../models/user.js'
import {Spot} from '@binance/connector'
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
const userGetByParams = async (req, res) => {
  const {APIKey, SecretKey} = req.query

  const {_id} = await User.findOne({APIKey, SecretKey})
  res.json({uid: _id})
}
const usersPost = async (req, res) => {
  const {APIKey, SecretKey} = req.body
  const user = new User({APIKey, SecretKey, email: APIKey})

  try {
    await user.save()
    res.json(user)
  } catch (error) {
    res.json(error)
  }
}

export {userGet, usersPost, userGetByParams}
