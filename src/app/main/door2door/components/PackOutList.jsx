/* eslint-disable array-callback-return */
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
import { Row } from 'react-bootstrap';

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

const PackOutList = ({ event }) => {
	const classes = useStyles();
	var tarifa = 0;
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell>#</TableCell>
						<TableCell>Packaging</TableCell>
						<TableCell>Quantities</TableCell>
						<TableCell>Handling Out</TableCell>
						<TableCell>Special Services</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{event.map(row => (
						<TableRow key={row.idlista}>
							<TableCell component="th" scope="row">
								{row.idlista + 1}
							</TableCell>
							<TableCell>{row.tipo}</TableCell>
							<TableCell>{row.qtyout}</TableCell>

							<TableCell>
								{row.tipo === 'Pallets'
									? 7.48 * row.qtyout < 46
										? 46 + 34.5
										: 7.48 * row.qtyout + 34.5
									: 2.9 * row.qtyout + 34.5}
							</TableCell>
							<TableCell>
								{/* new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
									row.qty * row.dutiesrate * row.fob
                                ) */}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default PackOutList;

/*
if (total.tipo === 'Pallets') {
					totalporembarque1 = 7.48 * total.qtyout;
					if (totalporembarque1 < 46) {
						totalporembarque = 46 + 34.5;
					} else totalporembarque = 7.48 * total.qtyout + 34.5;
				} else {
					totalporembarque = 2.9 * total.qtyout + 34.5;
				}
*/
