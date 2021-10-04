const GetSkuDetails = async skunumber => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ skunumber })
	};

	const resp = await fetch(
		`https://vwat0hqjt0.execute-api.us-east-1.amazonaws.com/dev/getskudetails`,
		requestOptions
	);
	const sku = await resp.json();

	console.log('Mongo SKUDETAILS,', sku[0].htclas.duties);
	return sku[0];
};

export default GetSkuDetails;
