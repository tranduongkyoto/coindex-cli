const axios = require('axios');
const rp = require('request-promise');

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async getPriceData(coinOption, curOption) {
    try {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: curOption,
      });

      const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
        qs: {
          symbol: coinOption,
          convert: curOption,
        },
        headers: {
          'X-CMC_PRO_API_KEY': this.apiKey,
        },
        json: true,
        gzip: true,
      };
      var result = '';
      const response = await rp(requestOptions);
      const data = response.data;
      coinOption.split(',').map((item) => {
        result += `Coin: ${item} (${
          data[item].name
        }) | Price: ${formatter.format(
          JSON.stringify(data[item].quote[curOption].price)
        )} | Rank: ${data[item].cmc_rank}\n`;
      });
      return result;
    } catch (err) {
      handleAPIError(err);
    }
  }
}

function handleAPIError(err) {
  if (err.response.status === 401) {
    throw new Error(
      'Your API key is invalid - Go to https://coinmarketcap.com/api/'
    );
  } else if (err.response.status === 404) {
    throw new Error('Your API is not responding');
  } else {
    throw new Error('Something is not working');
  }
}

module.exports = CryptoAPI;
