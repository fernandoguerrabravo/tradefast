import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import Paper from '@material-ui/core/Paper';
import { green, red, blue, orange } from '@material-ui/core/colors';
import { Box, Divider, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Icon from '@material-ui/core/Icon';
import { composeInitialProps } from 'react-i18next';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

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
		},
		iconButton: {
			padding: 10
		},
		divider: {
			height: 28,
			margin: 4
		}
	},

	formControl: {
		margin: theme.spacing(1)
	},
	formControl2: {
		margin: theme.spacing(1),
		minWidth: 100,
		padding: theme.spacing(1)
	},
	selectEmpty: {
		marginTop: theme.spacing(1)
	},
	titles: {
		alignItems: 'left',
		flexGrow: 1,
		display: 'flex-grow',
		textAlign: 'left',
		padding: theme.spacing(1)
	},

	paper: {
		padding: theme.spacing(1),
		color: theme.palette.text.secondary
	},

	icons: {
		fontSize: 'small',
		backgroundColor: red[500],
		color: red[500]
	},

	table: {
		minWidth: 200
	},
	paper1: {
		float: 'center',
		display: 'flex-grow',
		padding: theme.spacing(2),
		alignItems: 'center',
		flexGrow: 1,
		textAlign: 'center'
	},
	button: {
		margin: theme.spacing(1),
		color: blue[50]
	}
}));

const newJson1 = [
	{
		value: '2300',
		label: 'CDMX C.P.'
	},
	{
		value: '45679',
		label: 'JALISCO C.P.'
	},
	{
		value: '66628',
		label: 'NUEVA LEON '
	}
];

const newJson2 = [
	{
		value: 'p',
		label: 'Pallets'
	},
	{
		value: 'b',
		label: 'Boxes'
	}
];

export default function SkuDetailsMx({ mexico, setmexico }) {
	const classes = useStyles();
	const [value, setValue] = React.useState('');

	const handleChange = e => {
		setmexico({
			...mexico,
			fedexwarehouse: e.target.value
		});
	};

	const handleqtyChange = e => {
		setmexico({
			...mexico,
			qty_pallet: parseFloat(e.target.value)
		});
	};

	const handleChange1 = e => {
		setmexico({
			...mexico,
			tipo: e.target.value
		});
	};

	const handleqtyChange1 = e => {
		setmexico({
			...mexico,
			qtyout: parseFloat(e.target.value)
		});
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<FormControl variant="outlined" className={classes.formControl2}>
							<InputLabel id="mxwarehouse">Fedex Warehouse MX</InputLabel>
							<Select
								labelId="mxwarehouse"
								onChange={handleChange}
								value={mexico.fedexwarehouse}
								label="Fedex Warehouse MX"
								color="primary"
							>
								{newJson1.map(option => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</Select>
							<br />
							<TextField
								id="qty_pallet"
								name="qty_pallet"
								variant="outlined"
								label="Pallets to Export"
								color="primary"
								type="number"
								value={mexico.qty_pallet || ''}
								onChange={handleqtyChange}
							/>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<img src="https://fotos-ecl.s3.amazonaws.com/Laredo+TX%2C+USA+(2).png" alt="laredo" />

					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<FormControl variant="outlined" className={classes.formControl2}>
							<InputLabel id="outtipo">Select Packaging to Out</InputLabel>

							<Select
								labelId="outtipo"
								id="tipo"
								onChange={handleChange1}
								value={mexico.tipo}
								color="primary"
							>
								{newJson2.map(option => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</Select>
							<br />
							<TextField
								id="qty"
								name="qty"
								label="Pallets Quantities"
								variant="outlined"
								color="primary"
								type="number"
								value={mexico.qtyout || ''}
								onChange={handleqtyChange1}
							/>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>Infografia</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
