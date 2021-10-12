import React, { useState, useEffect } from 'react';
import { GetRatesBrLcl } from '../helpers/GetRatesBrLcl';

function UseGetRatesBrLcl(datosfinales) {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetRatesBrLcl(datosfinales).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, [datosfinales]);

	return state;
}

export default UseGetRatesBrLcl;
