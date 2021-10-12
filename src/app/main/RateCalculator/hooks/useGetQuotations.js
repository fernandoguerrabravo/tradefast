/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { GetQuotations } from '../helpers/GetQuotations';

export const useGetQuotations = idcliente => {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetQuotations(idcliente).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, [idcliente]);

	return state;
};
