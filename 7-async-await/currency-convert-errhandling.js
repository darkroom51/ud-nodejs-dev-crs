const axios = require('axios');

const getExchangeRate = async (from, to) => {
	try {
		const response = await axios.get(`http://api.fixer.io/latest?base=${from}`)
		const rate = response.data.rates[to];
		if (rate) { // rate != undefined
			return rate;
		} else {
			throw new Error(); // if to in not valid
		}
	} catch (e) {
		throw new Error(`Unable to convert ${from} to ${to}`)
	}
}

// const getCountries = (currencyCode) => {
// 	return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
// 		.then((response) => {
// 			return response.data.map((el) => el.name);
// 		})
// 		.catch((e) => {
// 			throw new Error(`Unable to get countries that use ${currencyCode}`)
// 		})
// }

const getCountries = async (currencyCode) => {
	try {
		const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
		return response.data.map((el) => el.name);
	} catch (e) {
		throw new Error(`Unable to get countries that use ${currencyCode}`)
	}
}

const convertCurrencyAA = async (from, to, amount) => {
	const countries = await getCountries(to);
	const rate = await getExchangeRate(from, to);
	const exchangedAmount = amount * rate;

	return `${amount} ${from} is worth ${exchangedAmount} ${to}. You can spend it in: ${countries.join(', ')}`;
}



convertCurrencyAA('USD', 'EUR', 100)
	.then((response) => {
		console.log(response);
	})
	.catch((e) => {
		console.log('convertCurrencyAA promise Error: ', e.message);
	})