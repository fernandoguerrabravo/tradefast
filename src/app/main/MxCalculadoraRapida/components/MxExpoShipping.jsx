/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';
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
import DataTable from 'react-data-table-component';
import MxPackOutList from './MxPackoutlist';

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

const newJson2 = [
	{
		value: 'Pallets',
		label: 'Pallets'
	},
	{
		value: 'Boxes',
		label: 'Boxes'
	}
];

const MxExpoShipping = ({ handout, sethandout, lista, setoutlista }) => {
	const classes = useStyles();
	const [value, setValue] = React.useState('');

	const [paquetes, setpaquetes] = useState({
		tipo: '',
		qtyout: '',
		totalout: ''
	});

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

	const handleChange1 = e => {
		setpaquetes({
			...paquetes,
			tipo: e.target.value
		});
	};

	const handleqtyChange1 = e => {
		setpaquetes({
			...paquetes,
			qtyout: parseFloat(e.target.value)
		});
	};

	useEffect(() => {
		sethandout({ out: getTotals(lista) });
	}, [lista, sethandout]);

	const submitout = () => {
		if (paquetes.qtyout !== '' && paquetes.tipo !== '') {
			setoutlista({ lista: [...lista, paquetes] });
			let totalporembarque = 0;
			let totalporembarque1 = 0;
			let totalout = 0;
			lista.forEach(total => {
				if (total.tipo === 'Pallets') {
					totalporembarque1 = 7.48 * total.qtyout;
					if (totalporembarque1 < 46) {
						totalporembarque = 46 + 34.5;
					} else totalporembarque = 7.48 * total.qtyout + 34.5;
				} else {
					totalporembarque = 2.9 * total.qtyout + 34.5;
				}

				totalout += totalporembarque;
			});

			setpaquetes({
				...paquetes,
				tipo: '',
				qtyout: '',
				id: ''
			});
		} else {
			swal({
				title: 'Opss!',
				text: 'Add Packaging and Quantities',
				icon: 'warning'
			});
		}
	};

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
					: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
							2.9 * row.qtyout + 34.5
					  )
		}
	];

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<Paper style={{ backgroundColor: '#F6F6F6' }} className={classes.paper1}>
						<FormControl variant="outlined" className={classes.formControl2}>
							<InputLabel id="outtipo">Packaging to Out</InputLabel>
							<Select
								labelId="outtipo"
								id="tipo"
								onChange={handleChange1}
								value={paquetes.tipo}
								color="secondary"
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
								label="Quantities"
								variant="outlined"
								color="secondary"
								type="number"
								value={paquetes.qtyout || ''}
								onChange={handleqtyChange1}
							/>
							<br />
							<Button onClick={submitout} variant="contained" color="primary">
								+ Add Item to List
							</Button>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					{/* <MxPackOutList handout={handout} sethandout={sethandout} total={paquetes.totalout} event={lista} /> */}
					<Paper className={classes.paper1}>
						{' '}
						<h4>
							Total Handling Out:{' '}
							<strong>
								{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
									getTotals(lista)
								)}
							</strong>
						</h4>
					</Paper>
					<br />
					<DataTable columns={columns} data={lista} />
				</Grid>
			</Grid>
		</div>
	);
};

export default MxExpoShipping;
