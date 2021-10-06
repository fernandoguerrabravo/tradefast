import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';

const ListHtsTools = () => {
	const search = () => {};

	// <SimplePopover codigo = {id}/>
	return (
		<>
			<Link role="button" to="htsTax">
				<Button onClick={search} variant="contained" color="primary">
					+ New HTS Classification
				</Button>
			</Link>
		</>
	);
};

export default ListHtsTools;
