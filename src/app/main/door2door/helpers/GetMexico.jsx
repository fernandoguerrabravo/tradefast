const GetMexico = async event => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(event)
	};

	const resp = await fetch(` https://fl8vvup0y0.execute-api.us-east-1.amazonaws.com/dev/mexico`, requestOptions);
	const sku = await resp.json();

	return sku;
};

export default GetMexico;
