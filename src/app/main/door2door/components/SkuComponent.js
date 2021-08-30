import React from 'react';
import Select from 'react-select';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import Paper from '@material-ui/core/Paper';
import { green, red, blue } from '@material-ui/core/colors';
import { Divider, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { UseGetOtherTax } from 'app/main/hooks/useGetOtherTax';
import { SkuComponentList } from './SkuComponentList';
import ModalSku from './ModalSku';
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
		minWidth: 400
	},
	formControl2: {
		margin: theme.spacing(1),
		minWidth: 300,
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
		float: 'right',
		flexGrow: 1,
		display: 'flex-grow',
		padding: theme.spacing(2),
		alignItems: 'left',
		textAlign: 'left'
	},
	button: {
		margin: theme.spacing(1)
	}
}));

const lista = [];

export default function SkuComponent({ sethidden, datosfinales, setdatosfinales }) {
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
		FTA: ''
	});

	const [arregloskus, setarregloskus] = useState({
		arreglosdelsku: [],
		totalsku: '',
		totalfob: '',
		totalduties: '',
		totalotherduties: ''
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

		for (const valores of skufinal) {
			if (valores.sku == event.value) {
				setskus({
					idlista: id,
					fob: valores.fob,
					shortdescription: valores.shortdescription,
					sku: event.value,
					hts8: valores.hts8,
					duties: valores.duties,
					htsdescription: valores.htsdescription,
					qty: '',
					FTA: valores.FTA,
					List301: valores.List301,
					tax301: valores.tax301
				});
			}
		}
	};

	const submitsku = () => {
		if (skus.qty !== '' && skus.sku !== '') {
			lista.push(skus);
			const nrosku = lista.length;
			let sumadefob = 0;
			let sumadeduties = 0;
			let sumadeothertax = 0;
			for (const sumafob of lista) {
				sumadefob = sumadefob + sumafob.fob * sumafob.qty;
				sumadeduties = sumadeduties + sumafob.duties * sumafob.fob * sumafob.qty;
			}

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
				qty: '',
				sku: ''
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

			sethidden({
				hiddenbultos: true,
				hiddensku: false,
				hiddenbox: false,
				hiddenfinal: false,
				hiddenrate: false
			});

			console.log(arregloskus);
		} else {
			swal({
				title: 'oops!',
				text: 'Select SKU to Export!!',
				icon: 'warning'
			});
		}
	};

	const backsku = () => {
		sethidden({
			hiddenlocation: true,
			hiddensku: false,
			hiddenbox: false,
			hiddenfinal: false
		});
	};

	const newJson1 = [];
	for (const codigo of skufinal) {
		{
			newJson1.push({
				value: codigo.sku,
				label: codigo.sku
			});
		}
	}

	return (
		<form onKeyDown={onKeyDown} noValidate autoComplete="off">
			<br></br>
			<Grid container spacing={3}>
				<Grid item xs={10}>
					<Paper className={classes.paper}>
						<Typography className={classes.titles} variant="subtitle1" gutterBottom>
							<strong>Pickup Address</strong>
						</Typography>
						<Typography className={classes.titles} variant="subtitle2" gutterBottom>
							{sellersfinal.number} {sellersfinal.address_1}, {sellersfinal.neighborhood},{' '}
							{sellersfinal.ciudad}, {sellersfinal.estado}, {sellersfinal.zipCode}, {sellersfinal.country}{' '}
							&nbsp;&nbsp;
							<Tooltip title="Seller's Pickup Address">
								<InfoIcon style={{ color: green[500] }} className={classes.icon} />
							</Tooltip>
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={2}>
					<Paper className={classes.paper}>
						<Button size="large" onClick={backsku} variant="contained" color="secondary">
							Back
						</Button>
						&nbsp;&nbsp;
						<Button size="large" onClick={nextsku} variant="contained" color="secondary">
							Next
						</Button>
					</Paper>
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography className={classes.titles} variant="h6" gutterBottom>
						SKU to Export
					</Typography>
					<Divider />
					<Typography className={classes.titles} style={{ color: green[600] }} variant="caption" gutterBottom>
						(1) In this section you must enter information for each Item identified by its SKU
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<Paper className={classes.paper}>
						<FormControl variant="outlined" className={classes.formControl2}>
							<Typography className={classes.titles} variant="subtitle1" gutterBottom />
						</FormControl>
						<FormControl variant="outlined" className={classes.formControl2}>
							<Select options={newJson1} onChange={handleInputChange} value={skus.sku} />
							<b />
							<Typography
								className={classes.titles}
								style={{ color: red[400] }}
								variant="caption"
								gutterBottom
							>
								<strong>Search Your Saved SKU Code</strong>
							</Typography>
						</FormControl>
					</Paper>
					<br />
					<Paper className={classes.paper}>
						<Typography style={{ color: blue[900] }} className={classes.titles} variant="subtitle1">
							<strong>SKU Summary</strong>
						</Typography>
						<TableContainer>
							<Table className={classes.table} size="small" aria-label="a dense table">
								<TableHead>
									<TableRow>
										<TableCell />
										<TableCell />
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell>
											<strong>Total Sku Codes</strong>
										</TableCell>
										<TableCell style={{ color: green[900] }}>{arregloskus.totalsku}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<strong>Total FOB US$</strong>
										</TableCell>
										<TableCell style={{ color: green[900] }}>
											{new Intl.NumberFormat('en-US', {
												style: 'currency',
												currency: 'USD'
											}).format(arregloskus.totalfob)}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<strong>Total Estimated Duties</strong>
										</TableCell>
										<TableCell style={{ color: green[900] }}>
											{new Intl.NumberFormat('en-US', {
												style: 'currency',
												currency: 'USD'
											}).format(arregloskus.totalduties)}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											{' '}
											<strong>Other Duties (Total)</strong>
										</TableCell>
										<TableCell style={{ color: green[900] }}>
											{new Intl.NumberFormat('en-US', {
												style: 'currency',
												currency: 'USD'
											}).format(arregloskus.totalotherduties)}{' '}
											&nbsp;&nbsp;
											<Tooltip title="Harbour Maintenance Fee, Merchandise Processing Fee">
												<InfoIcon style={{ color: green[500] }} className={classes.icon} />
											</Tooltip>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
						<br />
					</Paper>
				</Grid>
				<Grid item xs={8}>
					<Paper className={classes.paper}>
						<TableContainer>
							<Table className={classes.table} size="small" aria-label="a dense table">
								<TableHead>
									<TableRow>
										<TableCell>
											<Typography
												style={{ color: blue[900] }}
												className={classes.titles}
												variant="subtitle1"
												gutterBottom
											>
												<strong>SKU DETAILS</strong>
											</Typography>
										</TableCell>
										<TableCell />
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell>
											<strong>SKU Code</strong>
										</TableCell>
										<TableCell style={{ color: blue[800] }}> {skus.sku}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<strong>Short Description</strong>
										</TableCell>
										<TableCell style={{ color: blue[800] }}>{skus.shortdescription}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<strong>FOB Value (by Sku) USD</strong>
										</TableCell>
										<TableCell style={{ color: blue[800] }}>
											{skus.fob &&
												new Intl.NumberFormat('en-US', {
													style: 'currency',
													currency: 'USD'
												}).format(skus.fob)}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											{' '}
											<strong>HTS Number (8 Digits)</strong>
										</TableCell>
										<TableCell style={{ color: blue[800] }}>{skus.hts8}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											{' '}
											<strong>General Duties (USA)</strong>
										</TableCell>
										<TableCell style={{ color: blue[800] }}>{skus.duties}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											{' '}
											<strong>FTA (USA)</strong>
										</TableCell>
										<TableCell style={{ color: blue[800] }}>{skus.FTA}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											{' '}
											<strong>CBP Description</strong>
										</TableCell>
										<TableCell style={{ color: blue[800] }}>{skus.htsdescription}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											{' '}
											<strong>Section 301 (Manufactured in China - List and Tax)</strong>
										</TableCell>
										<TableCell style={{ color: blue[800] }}>
											{' '}
											{skus.List301} {skus.tax301}
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
						<FormControl variant="outlined" className={classes.formControl2}>
							<TextField
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
								style={{ color: red[400] }}
								variant="caption"
								gutterBottom
							>
								<strong>Input Quantities to Export</strong>
							</Typography>
						</FormControl>
						<FormControl variant="outlined" className={classes.formControl2}>
							<Button onClick={submitsku} variant="contained" color="secondary">
								+ Add Item to List
							</Button>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<SkuComponentList event={arregloskus.arreglosdelsku} />
				</Grid>
			</Grid>
		</form>
	);
}
