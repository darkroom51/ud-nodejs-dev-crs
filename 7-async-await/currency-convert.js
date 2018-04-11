const axios = require('axios');

const getExchangeRate = (from, to) => {
	return axios.get(`http://api.fixer.io/latest?base=${from}`)
		.then((response) => {
			return response.data.rates[to];
		})
}

const getCountries = (currencyCode) => {
	return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
		.then((response) => {
			return response.data.map((el) => el.name);
		})
}

// getExchangeRate('USD', 'CAD')
// 	.then((rate) => {
// 		console.log(rate);
// 	})

// getCountries('USD')
// 	.then((countries) => {
// 		console.log(countries);
// 	})
// 	.catch((e) => {
// 		console.log(' getCountries promise Error: ', e);
// 	})

const convertCurrencyPR = (from, to, amount) => {
	let countries;
	return getCountries(to)
		.then((tempCountries) => {
			countries = tempCountries; // temp to use later

			return getExchangeRate(from, to);
		})
		.then((rate) => {
			const exchangedAmount = amount * rate;

			return `
			${amount} ${from} is worth ${exchangedAmount} ${to}
			you can spend it in: ${countries.join(', ')}
			`;
		})
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
		console.log('convertCurrencyPR promise Error: ', e);
	})