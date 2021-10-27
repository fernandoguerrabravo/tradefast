/* eslint-disable no-undef */
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
import DataTable from 'react-data-table-component';

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
		padding: theme.spacing(3),
		color: theme.palette.text.secondary
	},

	icons: {
		fontSize: 'small'
	},

	table: {
		minWidth: 650
	}
}));

const columns = [
	{
		name: 'Packaging',
		selector: row => row.tipo
	},
	{
		name: 'Quantities',
		selector: row => row.qtyout
	},
	{
		name: 'Handling Out',
		selector: row =>
			row.tipo === 'Pallets'
				? 7.48 * row.qtyout < 46
					? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(46 + 34.5)
					: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
							7.48 * row.qtyout + 34.5
					  )
				: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(2.9 * row.qtyout + 34.5)
	}
];

const getTotals = data => {
	let total = 0;
	data.forEach(item => {
		let costo = 0;
		if (item.tipo === 'Pallets') {
			costo = 7.48 * item.qtyout;
			if (costo < 46) {
				costo = 46 + 34.5;
			} else {
				costo = 7.48 * item.qtyout + 34.5;
			}
		} else {
			costo = 2.9 * item.qtyout + 34.5;
		}
		total += costo;
	});

	return total;
};
const MxPackOutList = ({ handout, sethandout, event, total }) => {
	const classes = useStyles();

	sethandout({
		...handout,
		out: getTotals(event)
	});

	return (
		<>
			<Paper style={{ backgroundColor: '#F6F6F6' }} className={classes.paper}>
				{' '}
				<h4>
					Total Handling Out:{' '}
					<strong>
						{' '}
						{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(getTotals(event))}
					</strong>
				</h4>
			</Paper>
			<br />

			<DataTable columns={columns} data={event} />
		</>
	);
};

export default MxPackOutList;

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
