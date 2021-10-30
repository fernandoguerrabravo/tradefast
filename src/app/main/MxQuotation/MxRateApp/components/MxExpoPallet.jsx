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
import MxExpoPalletTotal from './MxExpoPalletTotal';
import GetMexico from '../helpers/GetMexico';

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
		padding: theme.spacing(3),
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
		label: 'CDMX C.P. 02300'
	},
	{
		value: '45679',
		label: 'JALISCO C.P. 45679'
	},
	{
		value: '66628',
		label: 'NUEVO LEON C.P. 66628'
	}
];

const MxExpoPallet = ({ finales, setfinales }) => {
	const classes = useStyles();

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2
	});

	const [valued, setvalued] = useState({
		codigo_fba: 'PHX5',
		fedexwarehouse: '',
		qty_pallet: '',
		totalout: '',
		arreglodelpack: [],
		fob: ''
	});

	const [fletetotal, setfletetotal] = useState({
		total: 0
	});

	const [aparecidos, setaparecidos] = useState({
		totalaparecido: false
	});

	const handleChange = e => {
		setvalued({
			...valued,
			fedexwarehouse: e.target.value
		});
		setaparecidos({
			totalaparecido: false
		});
	};

	const handleqtyChange = e => {
		setvalued({
			...valued,
			qty_pallet: parseInt(e.target.value, 10),
			totalaparecido: false
		});
		setaparecidos({
			totalaparecido: false
		});
	};

	const handlefobChange = e => {
		setvalued({
			...valued,
			fob: parseInt(e.target.value, 10),
			totalaparecido: false
		});
		setaparecidos({
			totalaparecido: false
		});
	};

	const calcular = () => {
		if (valued.qty_pallet === '' || valued.fedexwarehouse === '' || valued.qty_pallet > 12) {
			swal({
				title: 'oops!',
				text: 'Input Correct Information (Max 12 Pallets)!!',
				icon: 'warning'
			});
		} else {
			setaparecidos({
				totalaparecido: true
			});
			GetMexico({ valued }).then(result =>
				setfinales({
					...finales,
					totalflete: result,
					bodegamx: valued.fedexwarehouse,
					qtypallets: valued.qty_pallet
				})
			);
		}
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<Paper style={{ backgroundColor: '#F6F6F6' }} className={classes.paper1}>
						<Grid item xs={12}>
							<Paper className={classes.paper1}>
								<FormControl variant="outlined" className={classes.formControl2}>
									<InputLabel id="mxwarehouse">Warehouse MX</InputLabel>
									<Select
										labelId="mxwarehouse"
										onChange={handleChange}
										value={valued.fedexwarehouse}
										label="Fedex Warehouse MX"
										color="secondary"
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
										color="secondary"
										type="number"
										value={valued.qty_pallet || ''}
										onChange={handleqtyChange}
									/>
									<br />
									{/* <TextField
										id="qty_pallet"
										name="qty_pallet"
										variant="outlined"
										label="FOB Value (Optional)"
										color="secondary"
										type="number"
										value={valued.fob || ''}
										onChange={handlefobChange}
									/> */}
									<br />
									<Button color="primary" variant="contained" onClick={calcular}>
										Search Rates
									</Button>
								</FormControl>
							</Paper>
						</Grid>
					</Paper>
					<br />
				</Grid>
				<Grid item xs={6}>
					{aparecidos.totalaparecido ? (
						<Paper className={classes.paper1}>
							<MxExpoPalletTotal setfletetotal={setfletetotal} valued={valued} />
							<br />
							{/* Insurance (optional):
							<Typography style={{ color: '#FF9900' }}>
								<strong>
									{valued.fob
										? valued.fob * 0.003 < 40
											? formatter.format(40)
											: formatter.format(valued.fob * 0.003)
										: 'Not Request'}
								</strong>
							</Typography>*/}
						</Paper>
					) : null}
					<br />
					<Paper className={classes.paper1}>
						<h6>
							Recogida desde la bodega del Seller sin costo, si esta ubicada en el area metropolitana de
							alguna de las ciudades donde estan ubicadas las 3 bodegas de Fedex indicadas; Despacho
							Auanero Export-Import; transporte hasta Laredo; y recepcion & manejo en bodega de Laredo, TX
							para conectar con operador de utima milla seleccionado por el Seller. No incluye costos por
							aranceles que defina la Aduanas de USA y la fianza ante Aduanas de USA (que debe prepagarse
							independientemente)
						</h6>
					</Paper>
				</Grid>{' '}
			</Grid>
		</div>
	);
};

export default MxExpoPallet;
