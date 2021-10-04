import { useState, useEffect } from 'react';
import GetSku from '../helpers/GetSku';

const UseGetSku = idcliente => {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetSku(idcliente).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, []);

	return state;
};

export default UseGetSku;
