import React, { useState, useEffect } from 'react';
import { GetLastmileibc } from '../helpers/GetLastmileibc';

function UseGetLastmileibc(datosfinales) {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetLastmileibc(datosfinales).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, [datosfinales]);

	console.log('state las mile:', state);
	return state;
}

export default UseGetLastmileibc;
