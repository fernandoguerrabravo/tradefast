import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { green, red, blue } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		display: 'flex-grow',
		alignItems: 'center',
		width: '100%',
		margin: theme.spacing(0),
		padding: theme.spacing(1),
		input: {
			marginLeft: theme.spacing(1),
			flex: 1
		}
	},
	paper: {
		padding: theme.spacing(1),
		color: theme.palette.text.secondary
	},

	icons: {
		fontSize: 'small'
	},

	table: {
		minWidth: 650
	}
}));

const SkuComponentList = ({ event }) => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell>SKU Code</TableCell>
						<TableCell>Short Description</TableCell>
						<TableCell>Units</TableCell>
						<TableCell>SKU FOB USD</TableCell>
						<TableCell>HTS (8 Digits)</TableCell>
						<TableCell>General Duties</TableCell>
						<TableCell>Total FOB (USD)</TableCell>
						<TableCell>Estimated Duties</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{event.map(row => (
						<TableRow key={row.idlista}>
							<TableCell component="th" scope="row">
								{row.sku}
							</TableCell>
							<TableCell>{row.shortdescription}</TableCell>
							<TableCell>{row.qty}</TableCell>
							<TableCell>
								{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.fob)}
							</TableCell>
							<TableCell>{row.hts8}</TableCell>
							<TableCell>{row.duties}</TableCell>
							<TableCell>
								{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
									row.fob * row.qty
								)}
							</TableCell>
							<TableCell>
								{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
									row.qty * row.dutiesrate * row.fob
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SkuComponentList;