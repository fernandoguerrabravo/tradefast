import React, { useState } from 'react';
import axios from 'axios';

export const GetResearch = async idcliente => {
	try {
		const response = (
			await axios
				.post(
					'https://kne6zd76af.execute-api.us-east-1.amazonaws.com/dev/getrsearch',
					{
						idcliente: 'abcdef'
					},
					{
						headers: {
							'Content-Type': 'application/json'
						}
					}
				)
				.catch(reason => console.warn('Axios error:', reason))
		).data;

		console.log('API response:', response);

		return response;
	} catch (reason) {
		console.warn('API request error:', reason);
	}

	return '';
};

export default GetResearch;
