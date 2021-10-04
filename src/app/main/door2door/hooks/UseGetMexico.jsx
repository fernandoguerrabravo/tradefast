/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import GetMexico from '../helpers/GetMexico';

const UseGetMexico = event => {
	const [state, setState] = useState({
		data: [],
		loading: true
	});

	useEffect(() => {
		GetMexico(event).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, []);

	return state;
};

export default UseGetMexico;
