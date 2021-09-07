import { useState, useEffect } from 'react';
import GetClas from '../helpers/GetClas';

const UseFetchClas = htscode => {
	const [state, setState] = useState({
		data: [],
		loading: true,
		finales: []
	});

	useEffect(() => {
		GetClas(htscode).then(imgs => {
			const originalJson = imgs;
			const newJson = [];
			for (const htsCode of originalJson) {
				if (htsCode.htsno.length > 12) {
					newJson.push(htsCode);
				}
			}

			setState({
				data: imgs,
				loading: false,
				finales: newJson
			});
		});
	}, [htscode]);

	return state;
};

export default UseFetchClas;
