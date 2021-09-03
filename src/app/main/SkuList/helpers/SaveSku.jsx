const SaveSku = async event => {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const fecha = new Date();
	const fecha1 = fecha.toDateString();
	event.fecha_creacion = fecha1;
	const raw = JSON.stringify(event);

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw
	};

	fetch(' https://vwat0hqjt0.execute-api.us-east-1.amazonaws.com/dev/savesku', requestOptions)
		.then(response => response.json())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));

	return '';
};
