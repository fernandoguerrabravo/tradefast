/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import Paper from '@material-ui/core/Paper';
import { green, red, blue, orange } from '@material-ui/core/colors';
import { Divider, Typography } from '@material-ui/core';
import { UseGetOtherTax } from 'app/main/hooks/useGetOtherTax';
import MxSkuComponentList from './MxSkuComponentList';
import UseGetAddress from '../hooks/UseGetAddress';
import UseGetSku from '../hooks/UseGetSku';

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
		margin: theme.spacing(1),
		minWidth: 100
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
		color: theme.palette.text.secondary,
		textAlign: 'center'
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
		float: 'right',
		flexGrow: 1,
		display: 'flex-grow',
		padding: theme.spacing(2),
		alignItems: 'left',
		textAlign: 'left'
	},
	button: {
		margin: theme.spacing(1)
	},
	colorcito: {
		color: '#e47911'
	}
}));

const MxSkuComponent = ({ arregloskus, setarregloskus, datosfinales, setdatosfinales, lista, setlistoco }) => {
	const sel = document.getElementById('sku');

	const idcliente = 'abcdef';
	const classes = useStyles();
	const sku = UseGetSku(idcliente);
	const skufinal = sku.data;
	const othertaxes = UseGetOtherTax();
	const othertaxesfinal = othertaxes.data;

	const sellers = UseGetAddress(idcliente);
	const sellersfinal = sellers.data;

	const [skus, setskus] = useState({
		id: '',
		sku: '',
		fob: '',
		shortdescription: '',
		hts8: '',
		duties: '',
		htsdescription: '',
		qty: '',
		FTA: '',
		dutiesrate: '',
		dutiespecific: ''
	});

	const handleqtyChange = event => {
		setskus({
			...skus,
			[event.target.name]: parseFloat(event.target.value)
		});
	};

	function onKeyDown(keyEvent) {
		if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
			keyEvent.preventDefault();
		}
	}

	const handleInputChange = event => {
		const id = lista.length;
		skufinal.forEach(valores => {
			if (valores.sku === event.value) {
				setskus({
					...skus,
					idlista: id,
					fob: valores.fob,
					shortdescription: valores.shortdescription,
					sku: event.value,
					hts8: valores.htsclas?.hts ?? '',
					duties: valores.htsclas?.duties ?? '',
					htsdescription: valores.htsclas?.description ?? '',
					FTA: valores?.htsclas?.special ?? '',
					List301: valores?.htsclas?.list301 ?? '',
					tax301: valores?.htsclas?.duties301 ?? '',
					dutiesrate: valores.htsclas?.dutiesrate ?? ''
				});
			}
		});
	};

	useEffect(() => {
		const nrosku = lista.length;
		let sumadefob = 0;
		let sumadeduties = 0;
		lista.forEach(sumafob => {
			sumadefob += sumafob.fob * sumafob.qty;
			sumadeduties += sumafob.dutiesrate * sumafob.fob * sumafob.qty;
		});
		// Calculo de los otros impuestos
		// Harbour maintenance fee
		const hmf = 0.00125 * sumadefob;
		let mpf = 0.0034664 * sumadefob;
		if (mpf < 27.23) {
			mpf = 27.23;
		} else if (mpf > 528.33) {
			mpf = 528.33;
		}

		const otherduties = hmf + mpf;

		setarregloskus({
			...arregloskus,
			arreglosdelsku: lista,
			totalsku: nrosku,
			totalfob: sumadefob,
			totalduties: sumadeduties,
			totalotherduties: otherduties
		});
	}, [lista]);

	const submitsku = () => {
		if (skus.qty !== '' && skus.sku !== '') {
			setlistoco({ lista: [...lista, skus] });
			setskus({
				idlista: '',
				fob: '',
				shortdescription: '',
				sku: '',
				hts8: '',
				duties: '',
				htsdescription: '',
				FTA: '',
				List301: '',
				tax301: '',
				qty: '',
				dutiesrate: ''
			});
		} else {
			swal({
				title: 'oops!',
				text: 'Insert a valid Quantity and SKU Code!!',
				icon: 'warning'
			});
		}
	};

	const nextsku = () => {
		if (arregloskus.arreglosdelsku !== '') {
			setdatosfinales({
				...datosfinales,
				skus: arregloskus,
				origen: sellersfinal
			});
		} else {
			swal({
				title: 'oops!',
				text: 'Select SKU to Export!!',
				icon: 'warning'
			});
		}
	};

	const newJson1 = [];
	skufinal.forEach(codigo => {
		newJson1.push({
			value: codigo.sku,
			label: codigo.sku
		});
	});

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Paper style={{ backgroundColor: '#F6F6F6' }} className={classes.paper}>
						<FormControl variant="outlined" className={classes.formControl2}>
							<Select id="sku" name="sku" options={newJson1} onChange={handleInputChange} />
							<b />
							<Typography
								className={classes.titles}
								style={{ color: '#e47911' }}
								variant="caption"
								gutterBottom
							>
								<strong>Search Your Saved SKU Code</strong>
							</Typography>
							<TextField
								style={{ color: '#e47911', zIndex: 0 }}
								id="qty"
								name="qty"
								label="SKU Quantities"
								variant="outlined"
								color="secondary"
								type="number"
								value={skus.qty || ''}
								onChange={handleqtyChange}
							/>
							<Typography
								className={classes.titles}
								style={{ color: '#e47911' }}
								variant="caption"
								gutterBottom
							>
								<strong>Input Quantities to Export</strong>
							</Typography>
							<Button onClick={submitsku} variant="contained" color="primary">
								+ Add Item to List
							</Button>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={9}>
					<Paper style={{ backgroundColor: '#F6F6F6' }} className={classes.paper}>
						<MxSkuComponentList event={arregloskus.arreglosdelsku} />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default MxSkuComponent;
