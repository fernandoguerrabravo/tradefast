const GetHts = async htsnumber => {
	const requestOptions = {
		method: 'GET'
	};
	// console.log(htsnumber);

	const resp = await fetch(
		`https://xh1sv46z4b.execute-api.us-west-2.amazonaws.com/dev/htsgov?query=${htsnumber}`,
		requestOptions
	);
	const data = await resp.json();
	const dato = data.body.results;

	const hts = dato.map(img => {
		return {
			other: img?.other ?? '',
			superior: img?.superior ?? '',
			indent: img?.ident ?? '',
			description: img?.description ?? '',
			statisticalSuffix: img?.statisticalSuffix ?? '',
			score: img?.score ?? '',
			special: img?.special ?? '',
			htsno: img?.htsno ?? '',
			general: img?.general ?? ''
		};
	});

	// console.log(hts);
	return hts;
};

export default GetHts;
