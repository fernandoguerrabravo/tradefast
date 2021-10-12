import React, { useState } from 'react';
// import {  } from './components/'
// import {  } from './components/'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SkuStoreForm from './components/SkuStoreForm';
import { SkuStoreTools } from './components/SkuStoreTools';

export const SkuStoreApp = () => {
	const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1
		},

		paper: {
			padding: theme.spacing(1),
			color: theme.palette.text.secondary
		}
	}));

	const classes = useStyles();

	const [categories, setCategories] = useState({
		sku: '',
		keyword: '',
		hidden: false
	});

	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<SkuStoreTools />
				</Grid>
				<Grid item xs={8}>
					<Paper className={classes.paper}>
						<SkuStoreForm />
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper className={classes.paper}>Instructions</Paper>
				</Grid>
			</Grid>
		</>
	);
};

export default SkuStoreApp;
