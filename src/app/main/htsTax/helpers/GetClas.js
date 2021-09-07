const GetClas = async htsnumber => {
	console.log(htsnumber);

	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ text: htsnumber })
	};

	// const url = "https://j6zrjwrhe0.execute-api.us-west-2.amazonaws.com/prod/htsgov";
	const resp = await fetch(`https://oyq0mrdzsf.execute-api.us-east-1.amazonaws.com/dev/gethts`, requestOptions);
	const data = await resp.json();
	// const dato = data.body;
	// console.log("DATO:");
	// console.log(dato);
	const hts = data.map(img => {
		return {
			other: img?.other ?? '',
			superior: img?.superior ?? '',
			indent: img?.ident ?? '',
			description: img?.brief_description ?? '',
			statisticalSuffix: img?.statisticalSuffix ?? '',
			score: img?.score ?? '',
			special: img?.col1_special_text ?? '',
			htsno: img?.hts8 ?? '',
			general: img?.mfn_text_rate ?? ''
		};
	});
	console.log(hts);
	return hts;
};

export default GetClas;
