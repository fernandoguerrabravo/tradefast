import React, { useState, useEffect } from 'react';
import { GetSellers } from 'app/main/helpers/GetSellers';

const UseGetAddress = idcliente => {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetSellers(idcliente).then(imgs => {
			const originalJson = imgs.facilites;
			const newJson = [];
			originalJson.forEach(add => {
				if (add.type === 'exw') {
					newJson.push(add);
				}
			});
			setState({
				data: newJson[0]
			});
		});
	}, [idcliente]);

	return state;
};

export default UseGetAddress;
