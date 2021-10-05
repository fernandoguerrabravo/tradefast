/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
// import GetSkuDetails from '../helpers/GetSkuDetails';

const useGetSkuDetails = (detallestotales, skunumber) => {
	const [state, setState] = useState({
		fob: '',
		shortdescription: '',
		sku: '',
		hts8: '',
		duties: '',
		htsdescription: '',
		FTA: '',
		List301: '',
		tax301: '',
		dutiesrate: ''
	});

	useEffect(() => {
		detallestotales.forEach(imgs => {
			if (imgs.sku === skunumber) {
				setState({
					fob: imgs.fob,
					shortdescription: imgs.shortdescription,
					sku: skunumber,
					hts8: imgs.htsclas?.hts ?? '',
					duties: imgs.htsclas?.duties ?? '',
					htsdescription: imgs.htsclas?.description ?? '',
					FTA: imgs?.htsclas?.special ?? '',
					list301: imgs?.htsclas?.list301 ?? '',
					tax301: imgs?.htsclas?.duties301 ?? '',
					dutiesrate: imgs.htsclas?.dutiesrate ?? '',
					country_origin: imgs?.country_origin ?? '',
					average: imgs?.average ?? '',
					max: imgs?.max ?? '',
					min: imgs?.min ?? '',
					fecha_creacion: imgs?.fecha_creacion ?? '',
					special: imgs?.htsclas?.special ?? '',
					categories0: imgs?.htsclas?.categories.L0 ?? '',
					categories1: imgs?.htsclas?.categories.L1 ?? '',
					categories2: imgs?.htsclas?.categories.L2 ?? '',
					categories3: imgs?.htsclas?.categories.L3 ?? ''
				});
			}
		});
	}, [skunumber]);

	console.log('FetchSKuDetails', state);
	return state;
};

export default useGetSkuDetails;
