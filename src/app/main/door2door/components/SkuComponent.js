/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable no-const-assign */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
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
import SkuComponentList from './SkuComponentList';
import { UseGetSku } from '../hooks/useGetSku';
import UseGetAddress from '../hooks/UseGetAddress';

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

export default function SkuComponent({
	arregloskus,
	setarregloskus,
	datosfinales,
	setdatosfinales,
	lista,
	setlistoco
}) {
	const sel = document.getElementById('sku');
	let otherduties = '';
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

	const submitsku = () => {
		if (skus.qty !== '' && skus.sku !== '') {
			setlistoco({ lista: [...lista, skus] });
			const nrosku = lista.length;
			let sumadefob = 0;
			let sumadeduties = 0;
			const sumadeothertax = 0;
			/* lista.forEach(sumafob => {
				sumadefob += sumafob.fob * sumafob.qty;
				sumadeduties += sumafob.dutiesrate * sumafob.fob * sumafob.qty;
			}); */
			// Calculo de los otros impuestos
			// Harbour maintenance fee

			const hmf = othertaxesfinal.hmf.rate * sumadefob;

			let mpf = othertaxesfinal.mpf.rate * sumadefob;

			if (mpf < 27.23) {
				mpf = 27.23;
			} else if (mpf > 528.33) {
				mpf = 528.33;
			}

			otherduties = hmf + mpf;

			setarregloskus({
				arreglosdelsku: lista,
				totalfob: sumadefob,
				totalsku: nrosku,
				totalduties: sumadeduties,
				totalotherduties: otherduties
			});

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
						<SkuComponentList event={lista} />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
