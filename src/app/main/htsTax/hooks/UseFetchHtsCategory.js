/* eslint-disable import/prefer-default-export */
import startOfYesterday from 'date-fns/startOfYesterday';
import { useState, useEffect } from 'react';
import { HtsGetCategories } from '../helpers/GetHtsCategory';

export const UseFetchHtsCategory = htscode => {
	const [state, setState] = useState({
		categorias: []
	});

	useEffect(() => {
		HtsGetCategories(htscode).then(imgs => {
			// console.log("Que pasa con este Arreglo:")
			// console.log(imgs);
			setState({
				categorias: imgs
			});
		});
	}, [htscode]);

	// console.log("Que pasa con este Arreglo Bonito:")
	// console.log(state);

	return state;
};
