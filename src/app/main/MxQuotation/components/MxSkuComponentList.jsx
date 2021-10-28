/* eslint-disable prefer-const */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { green, red, blue } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
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

const MxSkuComponentList = ({ event }) => {
	console.log('eventos', event);

	const columns = [
		{
			name: '#',
			selector: row => row.idlista
		},
		{
			name: 'SKU Code',
			selector: row => row.sku
		},
		{
			name: 'Description',
			selector: row => row.shortdescription
		},
		{
			name: 'Units',
			selector: row => row.qty
		},
		{
			name: 'SKU FOB USD',
			selector: row => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.fob)
		},
		{
			name: 'HTS (8 Digits)',
			selector: row => row.hts8
		},
		{
			name: 'General Duties',
			selector: row => row.duties
		},
		{
			name: 'Total FOB (USD)',
			selector: row =>
				new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.fob * row.qty)
		},
		{
			name: 'Estimated Duties',
			selector: row =>
				new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
					row.qty * row.dutiesrate * row.fob
				)
		},
		{
			name: 'Actions',
			selector: row => (
				<IconButton color="primary" aria-label="add to shopping cart">
					<img
						src="https://fotos-ecl.s3.amazonaws.com/icons8-eliminar-64.png"
						alt="delete"
						width="20"
						height="20"
					/>
				</IconButton>
			)
		}
	];

	const classes = useStyles();

	return (
		<>
			<DataTable columns={columns} data={event} />
		</>
	);
};

export default MxSkuComponentList;
