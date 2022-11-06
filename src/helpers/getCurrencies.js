const getCurrencies = (response, currenciesNumber) => {
  const sortedData = response.data
    .filter((currency) => +currency.priceChangePercent < 0)
    .sort(function (a, b) {
      return +b.priceChangePercent.localeCompare(+a.priceChangePercent)
    })
    .map(({symbol, priceChangePercent}) => {
      return {
        symbol,
        priceChangePercent: `${priceChangePercent}%`,
      }
    })
  const data = sortedData.slice(0, currenciesNumber)

  return currenciesNumber === 1 ? data[0] : data
}

module.exports = {
  getCurrencies,
}
