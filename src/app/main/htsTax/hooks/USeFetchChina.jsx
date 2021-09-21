import startOfYesterday from 'date-fns/startOfYesterday';
import { useState, useEffect } from 'react';
import GetChina from '../helpers/GetChina';

const UseFetchChina = htscode => {
	const [state, setState] = useState({
		chinos: []
	});

	useEffect(() => {
		GetChina(htscode).then(imgs => {
			setState({
				chinos: imgs
			});
		});
	}, [htscode]);

	return state;
};

export default UseFetchChina;
