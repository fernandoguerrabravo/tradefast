const GetChina = async htsnumber => {
	const raw = JSON.stringify({ hts8: htsnumber });

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: raw
	};

	const resp = await fetch('https://fl8vvup0y0.execute-api.us-east-1.amazonaws.com/dev/china', requestOptions);
	const data = await resp.json();

	return data;
};

export default GetChina;
