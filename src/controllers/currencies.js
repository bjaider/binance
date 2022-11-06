import {Spot} from '@binance/connector'
import {getCurrencies} from '../helpers/getCurrencies.js'
const currenciesGet = async (req, res) => {
  const client = new Spot()
  try {
    const response = await client.ticker24hr()
    const data = getCurrencies(response, 10)
    res.json(data)
  } catch ({response}) {
    res.status(response.status).json(response.data)
  }
}

export {currenciesGet}
