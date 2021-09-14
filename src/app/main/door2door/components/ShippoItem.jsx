import React, { useState, useEffect } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { Typography } from '@material-ui/core';
import ShippoRateFinales from './ShippoRateFinales';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

const ShippoItem = ({ fba, rates }) => {
	const classes = useStyles();

	return (
		<>
			<Grid item xs={12}>
				<Paper className={classes.paper}>
					<Typography variant="h5" component="h5">
						Destination FBA:{fba}
					</Typography>{' '}
					<br />
					<TableContainer component={Paper}>
						<Table className={classes.table} size="small" aria-label="a dense table">
							<TableHead>
								<TableRow>
									<TableCell>Carrier</TableCell>
									<TableCell align="right">Currency</TableCell>
									<TableCell align="right">Rate</TableCell>
									<TableCell align="right">Service Level</TableCell>
									<TableCell align="right" />
								</TableRow>
							</TableHead>
							<TableBody>
								{rates.map(datos => (
									<ShippoRateFinales key={datos} {...datos} />
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Grid>
			<br />
		</>
	);
};

export default ShippoItem;
