/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable radix */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
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
		margin: theme.spacing(1)
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
		label: 'NUEVA LEON C.P. 66628'
	}
];

const MxExpoPalletFTL = ({ finales, setfinales }) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2
	});

	const classes = useStyles();

	const [value, setvalue] = React.useState({
		tipo: '',
		bodega: '',
		flete: '',
		fob: '',
		garantizado: true,
		disponible: false
	});

	const handlechangeoption = e => {
		if (e.target.value === 'g') {
			setvalue({
				...value,
				tipo: e.target.value,
				garantizado: true,
				disponible: false,
				flete: ''
			});
		} else {
			setvalue({
				...value,
				tipo: e.target.value,
				garantizado: false,
				disponible: true,
				flete: ''
			});
		}
	};

	const handlefobChange = e => {
		setvalue({
			...value,
			fob: parseInt(e.target.value)
		});
	};

	useEffect(() => {
		
		setfinales({
			
			...finales,
			totalseguro: value.fob
				
		});
	}, [value.fob]);

	const handleChangegarantizado = e => {
		switch (e.target.value) {
			case '2300':
				setvalue({
					...value,
					flete: 2369.84 + 150 + 145,
					bodega: e.target.value
				});
				setfinales({
					...finales,
					total: 2369.84 + 150 + 145
				});

				break;
			case '45679':
				setvalue({
					...value,
					flete: 2342.84 + 150 + 145,
					bodega: e.target.value
				});
				setfinales({
					...finales,
					total: 2342.84 + 150 + 145
				});
				break;
			case '66628':
				setvalue({
					...value,
					flete: 1092.24 + 150 + 145,
					bodega: e.target.value
				});
				setfinales({
					...finales,
					total: 1092.24 + 150 + 145
				});

				break;

			default:
				setvalue({
					...value,
					flete: 0,
					bodega: ''
				});

				break;
		}
	};

	const handleChangedisponible = e => {
		switch (e.target.value) {
			case '2300':
				setvalue({
					...value,
					flete: 1983.75 + 150 + 145,
					bodega: e.target.value
				});

				break;
			case '45679':
				setvalue({
					...value,
					flete: 1907.56 + 150 + 145,
					bodega: e.target.value
				});
				break;
			case '66628':
				setvalue({
					...value,
					flete: 0,
					bodega: ''
				});

				break;
			default:
				setvalue({
					...value,
					flete: 0,
					bodega: ''
				});

				break;
		}
	};

	const FTL = {
		disponible: {
			2300: 1983.75,
			45679: 1907.56,
			66628: 0
		},
		garantizado: {
			2300: 2369.84,
			45679: 2342.84,
			66628: 1092.24
		}
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<Paper style={{ backgroundColor: '#F6F6F6' }} className={classes.paper1}>
						{/* <Grid item xs={12}>
							<FormControl className={classes.formControl2}>
								<FormLabel component="legend">Select FULL TRACK Service</FormLabel>
								<br />
								<RadioGroup
									aria-label="gender"
									name="gender1"
									value={value.tipo}
									onChange={handlechangeoption}
								>
									<Grid container spacing={2}>
										<FormControlLabel
											value="a"
											control={<Radio />}
											label="Service at Availability"
										/>
										<FormControlLabel value="g" control={<Radio />} label="Guaranteed Service" />
									</Grid>
								</RadioGroup>
							</FormControl>
						</Grid> */}
						<br />
						{value.garantizado ? (
							<>
								<Grid item xs={12}>
									<Paper className={classes.paper}>
										<FormControl variant="outlined" className={classes.formControl2}>
											<InputLabel id="mxwarehouse">Warehouse MX</InputLabel>
											<Select
												labelId="mxwarehouse"
												onChange={handleChangegarantizado}
												value={value.bodega}
												label="Fedex Warehouse MX"
												color="secondary"
												style={{ width: 200 }}
											>
												{newJson1.map(option => (
													<MenuItem key={option.value} value={option.value}>
														{option.label}
													</MenuItem>
												))}
											</Select>
											<br />
											<TextField
												id="fob"
												name="fob"
												variant="outlined"
												label="FOB Value (Optional)"
												color="secondary"
												type="number"
												value={value.fob || ''}
												onChange={handlefobChange}
											/>
											<br />
										</FormControl>
									</Paper>
								</Grid>
								<br />
								<Grid item xs={12}>
									<Paper className={classes.paper}>
										El servicio <strong>"Garantizado"</strong> tiene un periodo maximo de 48 horas
										de salida desde el momento de la confirmacion de su booking, y esta basado en el
										reposicionamiento de camiones disponibles en otros lugares.
									</Paper>
								</Grid>
							</>
						) : null}
						{/* value.disponible ? (
							<>
								<Grid item xs={12}>
									<Paper className={classes.paper}>
										<FormControl variant="outlined" className={classes.formControl2}>
											<InputLabel id="mxwarehouse2">Warehouse MX Disponible </InputLabel>
											<Select
												labelId="mxwarehouse2"
												onChange={handleChangedisponible}
												value={value.bodega}
												label="Fedex Warehouse MX"
												color="secondary"
												style={{ width: 200 }}
											>
												{newJson1.map(option => (
													<MenuItem key={option.value} value={option.value}>
														{option.label}
													</MenuItem>
												))}
											</Select>
											<br />
											<TextField
												id="fob"
												name="fob"
												variant="outlined"
												label="FOB Value (Optional)"
												color="secondary"
												type="number"
												value={value.fob || ''}
												onChange={handlefobChange}
											/>
										</FormControl>
									</Paper>
								</Grid>
								<br />
								<Grid item xs={12}>
									<Paper className={classes.paper}>
										Servicio <strong>"Sujeto a Disponibilidad"</strong> depende de la disponibilidad
										de camionesx en el area de la bodega del Seller. La fecha probable de recogida
										sera informada al Seller una vez que consulte por esta opcion.
									</Paper>
								</Grid>
							</>
												) : null */}
					</Paper>
					<br />
				</Grid>
				<Grid item xs={6}>
					<Paper style={{ backgroundColor: '#F6F6F6' }} className={classes.paper1}>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<h4>
									Tarifa MX-Laredo TX &nbsp;&nbsp;<strong>{formatter.format(value.flete)}</strong>
								</h4>
								<br />
								<h6>
									Insurance (optional):
									<strong>
										{value.fob
											? value.fob * 0.003 < 40
												? formatter.format(40)
												: formatter.format(value.fob * 0.003)
											: 'Not Request'}
									</strong>
								</h6>
							</Paper>
						</Grid>{' '}
						<br />
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<h6>
									Recogida desde la bodega del Seller sin costo, si esta ubicada en el area
									metropolitana de alguna de las ciudades donde estan ubicadas las 3 bodegas de Fedex
									indicadas; Despacho Auanero Export-Import; transporte hasta Laredo; y recepcion &
									manejo en bodega de Laredo, TX para conectar con operador de utima milla
									seleccionado por el Seller. No incluye costos por aranceles que defina la Aduanas de
									USA y la fianza ante Aduanas de USA (que debe prepagarse independientemente)
								</h6>
							</Paper>
						</Grid>
					</Paper>
					<br />
				</Grid>
			</Grid>
		</div>
	);
};

export default MxExpoPalletFTL;
