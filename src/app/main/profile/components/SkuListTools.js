import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	paper: {
		padding: theme.spacing(3),
		color: theme.palette.text.secondary
	}
}));

const SkuListTools = ({ setoculto }) => {
	const classes = useStyles();

	const back = () => {
		setoculto({
			hiddenlistools: false,
			hiddenstoreform: false,
			hiddentable: true,
			hiddendetails: false
		});
	};

	return (
		<>
			<Paper className={classes.paper}>
				<Button onClick={back} variant="contained" color="primary">
					Back to List
				</Button>
			</Paper>
		</>
	);
};

export default SkuListTools;
