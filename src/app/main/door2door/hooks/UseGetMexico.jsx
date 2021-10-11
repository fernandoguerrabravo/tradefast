/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import GetMexico from '../helpers/GetMexico';

const UseGetMexico = (setmexico, mexico) => {
	const [state, setState] = useState({
		data: [],
		loading: true
	});

	useEffect(() => {
		GetMexico(mexico).then(imgs => {
			setmexico({
				...mexico,
				totalin: 100
			});
			setState({
				data: imgs
			});
		});
	}, []);

	return state;
};

export default UseGetMexico;
