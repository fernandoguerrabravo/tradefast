import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListHtsTools from './components/ListHtsTools';
import ListHtsTable from './components/ListHtsTable';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	paper: {
		padding: theme.spacing(3),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

export default function FullWidthGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<ListHtsTools />
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12}>
					<Paper className={classes.paper}>
						<ListHtsTable />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
