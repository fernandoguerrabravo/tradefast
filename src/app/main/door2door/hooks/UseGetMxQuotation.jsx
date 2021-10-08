/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import GetQuoationMexico from '../helpers/GetQuotationMexico';

const UseGetMxQuotation = event => {
	const [state, setState] = useState({
		data: [],
		loading: true
	});

	useEffect(() => {
		GetQuoationMexico(event).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, []);

	return state;
};

export default UseGetMxQuotation;
