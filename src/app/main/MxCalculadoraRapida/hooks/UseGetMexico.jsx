/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import GetMexico from '../helpers/GetMexico';

const UseGetMexico = valued => {
	const [state, setState] = useState({
		data: [],
		loading: true,
		totalito: ''
	});

	useEffect(() => {
		GetMexico(valued).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, []);

	return state;
};

export default UseGetMexico;
