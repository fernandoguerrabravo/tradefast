/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import GetSkuDetails from '../helpers/GetSkuDetails';

const useGetSkuDetails = skunumber => {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetSkuDetails(skunumber).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, []);

	console.log('FetchSKuDetails', state);
	return state;
};

export default useGetSkuDetails;
