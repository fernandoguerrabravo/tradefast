import React, { useState, useEffect } from 'react';
import GetShippo from '../helpers/GetShippo';

function UseGetRateIntegradores(datosfinales) {
	const [state, setState] = useState({
		data: [],
		circulo: true
	});

	useEffect(() => {
		GetShippo(datosfinales).then(imgs => {
			setState({
				data: imgs,
				circulo: false
			});
		});
	}, [datosfinales]);

	return state;
}

export default UseGetRateIntegradores;
