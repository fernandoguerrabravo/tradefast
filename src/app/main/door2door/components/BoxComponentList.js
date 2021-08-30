import React from 'react';
import { useState } from 'react';
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

export const BoxComponentList = ({ event }) => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell>Qty</TableCell>
						<TableCell>Weight (Kg)</TableCell>
						<TableCell>Width (cm)</TableCell>
						<TableCell>Length (cm)</TableCell>
						<TableCell>Height (cm)</TableCell>
						<TableCell>Total Weight (Kg)</TableCell>
						<TableCell>Total Volume (M3)</TableCell>
						<TableCell>FBA</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{event.map(row => (
						<TableRow key={row.id}>
							<TableCell component="th" scope="row">
								{row.qtybox}
							</TableCell>
							<TableCell>{row.weight}</TableCell>
							<TableCell>{row.width}</TableCell>
							<TableCell>{row.length}</TableCell>
							<TableCell>{row.height}</TableCell>
							<TableCell>{row.weightbox}</TableCell>
							<TableCell>{row.volbox}</TableCell>
							<TableCell>{row.fba}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
