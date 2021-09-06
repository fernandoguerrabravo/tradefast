import { roundToNearestMinutes } from 'date-fns/esm';
import React, { useState, useEffect } from 'react';
import GetPdf from '../helpers/GetPdf';

const UseGetPdf = sku => {
	const [state, setState] = useState({
		data: [],
		load: true
	});

	useEffect(() => {
		GetPdf(sku).then(imgs => {
			setState({
				data: imgs,
				load: false
			});
		});
	}, [sku]);

	console.log('que pasa con el pdf use:', state);

	return state;
};

export default UseGetPdf;
