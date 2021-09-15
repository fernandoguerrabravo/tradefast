/* eslint-disable camelcase */
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

const ShippoRateFinales = ({
	shipment,
	currency_local,
	amount_local,
	provider,
	provider_image_75,
	servicelevel,
	estimated_days
}) => {
	const classes = useStyles();

	return (
		<>
			<TableRow>
				<TableCell component="th" scope="row">
					{provider}
				</TableCell>
				<TableCell align="right">{currency_local}</TableCell>
				<TableCell align="right">{(amount_local * 1).toFixed(2)}</TableCell>
				<TableCell align="right">{servicelevel}</TableCell>
				<TableCell align="right">{estimated_days} &nbsp; Days</TableCell>
				<TableCell align="right">
					<img src={provider_image_75} alt="Girl in a jacket" width="60" height="60" />
				</TableCell>
			</TableRow>
		</>
	);
};

export default ShippoRateFinales;
