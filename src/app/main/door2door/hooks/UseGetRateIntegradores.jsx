import React, { useState, useEffect } from 'react';
import GetShippo from '../helpers/GetShippo';

function UseGetRateIntegradores(datosfinales) {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetShippo(datosfinales).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, [datosfinales]);

	return state;
}

export default UseGetRateIntegradores;
