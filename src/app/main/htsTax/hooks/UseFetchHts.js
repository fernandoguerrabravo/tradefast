import { useState, useEffect } from 'react';
import GetHts from '../helpers/GetHts';

const UseFetchHts = htscode => {
	const [state, setState] = useState({
		data: [],
		loading: true,
		finales: []
	});

	useEffect(() => {
		GetHts(htscode).then(imgs => {
			const originalJson = imgs;
			const newJson = [];
			originalJson.forEach(htsCode => {
				if (htsCode.htsno.length > 12) {
					newJson.push(htsCode);
				}
			});

			setState({
				data: imgs,
				loading: false,
				finales: newJson
			});
		});
	}, [htscode]);

	return state;
};

export default UseFetchHts;
