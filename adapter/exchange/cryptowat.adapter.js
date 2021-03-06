require('isomorphic-fetch')
const ExchangeAdapter = require('./adapter')

class CryptowatAdapter extends ExchangeAdapter {
  constructor () {
    super()
    this.API_ENDPOINT = `https://api.cryptowat.ch/`
  }

  async getPriceByCurrencyPrefix (currency, compare) {
    currency = currency.toLowerCase()
    compare = compare.toLowerCase()
    const targetUrl = this.API_ENDPOINT + `markets/bitfinex/${currency}${compare}/price`
    const result = await global.fetch(targetUrl)
    const priceInfo = await result.json()
    return {
      origin: 'cryptowat',
      primaryCurrency: compare,
      secondaryCurrency: currency,
      value: priceInfo.result.price
    }
  }
}

module.exports = CryptowatAdapter
