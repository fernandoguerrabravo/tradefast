/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { GetSku } from '../helpers/GetSku';

export const UseGetSku = idcliente => {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetSku(idcliente).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, [idcliente]);

	return state;
};
