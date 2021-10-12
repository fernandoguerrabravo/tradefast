/* eslint-disable import/prefer-default-export */
export const GetQuotationsbyid = async id => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ id })
	};

	// const url = "https://j6zrjwrhe0.execute-api.us-west-2.amazonaws.com/prod/htsgov";
	const resp = await fetch(
		`https://tlj0xssu56.execute-api.us-east-1.amazonaws.com/dev/getquotationsbyid`,
		requestOptions
	);
	const data = await resp.json();

	console.log('respuesta_mongo:', data);

	return data;
};
