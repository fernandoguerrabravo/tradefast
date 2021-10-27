/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import GetMexico from '../helpers/GetMexico';

const UseGetMexico = mexico => {
	const [state, setState] = useState({
		data: [],
		loading: true,
		totalito: ''
	});

	useEffect(() => {
		GetMexico(mexico).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, []);

	return state;
};

export default UseGetMexico;
