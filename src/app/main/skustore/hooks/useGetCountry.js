/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { GetCountry } from '../helpers/GetCountry';

export const UseGetCountry = () => {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetCountry().then(imgs => {
			setState({
				data: imgs
			});
		});
	}, []);

	return state;
};
