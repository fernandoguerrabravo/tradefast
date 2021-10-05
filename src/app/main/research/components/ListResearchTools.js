import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';

const ListResearchTools = ({ setpdf, volv, setboton, setescondidoinicial }) => {
	const research = () => {
		setescondidoinicial({
			escondidoinicial: false
		});

		setboton({
			volver: false
		});
	};

	const volver = () => {
		setescondidoinicial({
			escondidoinicial: true
		});

		setboton({
			volver: true
		});

		setpdf({
			loading: true
		});
	};

	return (
		<>
			{volv ? (
				<Button onClick={research} variant="contained" color="primary">
					+ New Search
				</Button>
			) : null}
			{volv ? null : (
				<Button onClick={volver} variant="contained" color="primary">
					Back to List
				</Button>
			)}
		</>
	);
};

export default ListResearchTools;
