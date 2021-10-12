/* eslint-disable import/prefer-default-export */
export const GetRatesBrLcl = async datosfinales => {
	const requestOptions = {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json'
		},

		body: JSON.stringify({ boxes: datosfinales.boxes, skus: datosfinales.skus })
	};

	const resp = await fetch(` https://fl8vvup0y0.execute-api.us-east-1.amazonaws.com/dev/getbtlcl`, requestOptions);
	const lclrate = await resp.json();

	return lclrate;
};
