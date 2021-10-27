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
	}, [event]);

	return state;
};

export default UseGetMxQuotation;
