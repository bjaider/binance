const {Spot} = require('@binance/connector')
const {getCurrencies} = require('../helpers/getCurrencies')
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

module.exports = {
  currenciesGet,
}
