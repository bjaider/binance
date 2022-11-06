import {Spot} from '@binance/connector'
import User from '../models/user.js'
/* const {getCurrencies} from '../helpers/getCurrencies') */

const ordersPost = async (req, res) => {
  /* const ticketClient = new Spot() */
  const {uid} = req.params
  const {symbol, side, type, price, quantity, timeInForce} = req.body
  const {APIKey, SecretKey} = await User.findOne({_id: uid})

  const client = new Spot(APIKey, SecretKey, {
    baseURL: process.env.BASE_URL,
  })

  try {
    /* const currencies = await ticketClient.ticker24hr()
    const {symbol} = await getCurrencies(currencies, 1) */
    const response = await client.newOrder(symbol, side, type, {
      price,
      quantity,
      timeInForce,
    })
    res.json(response.data)
  } catch ({response}) {
    res.status(response.status).json(response.data)
  }
}

export {ordersPost}
