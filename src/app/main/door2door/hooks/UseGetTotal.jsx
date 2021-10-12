/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import GetMexico from '../helpers/GetMexico';

const UseGetTotal = (mexico, setmexico, total) => {
	const [state, setState] = useState({
		data: [],
		loading: true
	});

	useEffect(() => {
		setmexico({
			...mexico,
			totalin: total
		});
	}, [total]);

	return state;
};

export default UseGetTotal;
