/* eslint-disable camelcase */
const GetQuoationMexico = async () => {
	const idcliente = 'abcdef';
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ idcliente })
	};

	const resp = await fetch(
		`https://fl8vvup0y0.execute-api.us-east-1.amazonaws.com/dev/getmxquotation`,
		requestOptions
	);
	const sku = await resp.json();
	console.log('PICHULA', sku);
	return sku;
};

export default GetQuoationMexico;
