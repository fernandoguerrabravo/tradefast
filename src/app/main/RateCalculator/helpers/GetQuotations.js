/* eslint-disable import/prefer-default-export */
export const GetQuotations = async idcliente => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ idcliente })
	};

	// const url = "https://j6zrjwrhe0.execute-api.us-west-2.amazonaws.com/prod/htsgov";
	const resp = await fetch(
		`https://tlj0xssu56.execute-api.us-east-1.amazonaws.com/dev/getquotations`,
		requestOptions
	);
	const data = await resp.json();

	return data;
};
