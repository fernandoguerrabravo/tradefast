/* eslint-disable import/prefer-default-export */

export const UpdateSku = async final => {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const fecha = new Date();
	const fecha1 = fecha.toDateString();
	const datos = final;
	const raw = JSON.stringify({
		sku: datos.sku,
		average: datos.average,
		max: datos.max,
		min: datos.min,
		data: datos.data,
		keyword: datos.keyword,
		res: true
	});

	console.log('raw : ', datos.sku);

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw
	};

	fetch('https://vwat0hqjt0.execute-api.us-east-1.amazonaws.com/dev/updatesku', requestOptions)
		.then(response => response.json())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));

	return '';
};
