import { useState, useEffect } from 'react';
import GetClasHts from '../helpers/GetClasHts';

const useGetClasHts = idcliente => {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetClasHts(idcliente).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, [idcliente]);

	console.log('datos fetch', state);

	return state;
};

export default useGetClasHts;
