import { useState, useEffect } from 'react';
import { GetResearch } from '../helpers/GetResearch';

export default function useGetResearch(idcliente) {
	const [state, setState] = useState({
		data: [],
		loading: true
	});
	useEffect(() => {
		GetResearch(idcliente).then(imgs => {
			setState({
				data: imgs,
				loading: false
			});
		});
	}, [idcliente]);

	return state;
}
