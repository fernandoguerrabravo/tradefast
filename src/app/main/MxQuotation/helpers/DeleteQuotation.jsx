const DeleteQuotation = async event => {
	console.log(event);
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ id: event })
	};

	const resp = await fetch(
		`https://fl8vvup0y0.execute-api.us-east-1.amazonaws.com/dev/deletequotation`,
		requestOptions
	);
	const sku = await resp.json();
	console.log(sku);
	return sku;
};

export default DeleteQuotation;
