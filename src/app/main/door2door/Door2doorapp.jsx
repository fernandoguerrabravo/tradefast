import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { deepOrange, green, red, blue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import swal from 'sweetalert';
import MxRates from './components/MxRates';
import SkutipobultoMx from './components/SkutipobultoMx';
import SkuComponent from './components/SkuComponent';
import Skutipobulto from './components/Skutipobulto';
import Resumen from './components/ResumenComponent';
import SkuDetailsMx from './components/SkuDetailsMx';
import Totalvalormexico from './components/totalvalormexico';
import UseGetAddress from './hooks/UseGetAddress';
import SkuSummary from './components/SkuSummary';

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
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary
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
	icons: {
		fontSize: 'small',
		backgroundColor: red[500],
		color: '#e47911'
	},

	table: {
		minWidth: 200
	},

	square: {
		color: theme.palette.getContrastText(green[500]),
		backgroundColor: green[500],
		width: theme.spacing(7),
		height: theme.spacing(7)
	}
}));

const steps = [
	{
		label: 'Select Freight Packaging',
		description: ``
	},
	{
		label: 'Create an ad group',
		description: 'An ad group contains one or more ads which target a shared set of keywords.'
	},
	{
		label: 'Create an ad',
		description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`
	}
];

export default function Door2doorApp() {
	// Arreglos para generar el resumen de SKU en SkuSummary

	const [arregloskus, setarregloskus] = useState({
		arreglosdelsku: [],
		totalsku: '',
		totalfob: '',
		totalduties: '',
		totalotherduties: ''
	});

	const [mexico, setmexico] = useState({
		codigo_fba: 'PHX5',
		fedexwarehouse: '',
		qtyout: '',
		qty_pallet: '',
		tipo: ''
	});

	const [mexico2, setmexico2] = useState({
		codigo_fba: 'PHX5',
		fedexwarehouse: '',
		qtyout: '',
		qty_pallet: '',
		tipo: ''
	});

	const idcliente = 'abcdef';
	const sellers = UseGetAddress(idcliente);
	const sellersfinal = sellers.data;

	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
		setdatosfinales({
			...datosfinales,
			skus: arregloskus,
			origen: sellersfinal
		});

		console.log(mexico);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const classes = useStyles();

	const [datosfinales, setdatosfinales] = useState({
		zip_destino: '',
		boxes: [],
		skus: [],
		pallets: [],
		tipobulto: '',
		origen: []
		// el tipo de bulto puede ser 'p' -> pallet  o 'b' -> box
	});

	const [hidden, sethidden] = useState({
		hiddenbultos: false,
		hiddensku: true,
		hiddenbox: false,
		hiddenfinal: false,
		hiddenrate: false
	});

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Typography className={classes.titles} variant="subtitle1" gutterBottom>
							<strong>Seller's Pickup Address</strong>
						</Typography>
						<Typography className={classes.titles} variant="subtitle2" gutterBottom>
							{sellersfinal.number} {sellersfinal.address_1}, {sellersfinal.neighborhood},{' '}
							{sellersfinal.ciudad}, {sellersfinal.estado}, {sellersfinal.zipCode}, {sellersfinal.country}{' '}
							&nbsp;&nbsp;
							<Tooltip title="Seller's Pickup Address">
								<InfoIcon style={{ color: '#e47911' }} className={classes.icon} />
							</Tooltip>
						</Typography>
					</Paper>
				</Grid>
			</Grid>
			<br />

			<Paper className={classes.paper}>
				<Stepper activeStep={activeStep} orientation="vertical">
					<Step>
						<StepLabel>Select Products to Export</StepLabel>
						<StepContent>
							<Typography>
								In this section you must enter information for each Item identified by its SKU
							</Typography>
							<br />
							<Grid container spacing={3}>
								<Grid item xs={12}>
									<SkuComponent
										arregloskus={arregloskus}
										setarregloskus={setarregloskus}
										datosfinales={datosfinales}
										setdatosfinales={setdatosfinales}
									/>
									<br />
									<Box sx={{ mb: 2 }}>
										<Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
											Continue
										</Button>
									</Box>
								</Grid>
							</Grid>
						</StepContent>
					</Step>
					<Step>
						<StepLabel>Input Shipping Details</StepLabel>
						<StepContent>
							<Typography>
								In this section you must select the type of shipment you will perform based on your
								shipping plan.
							</Typography>{' '}
							<br />
							<Grid container spacing={3}>
								<Grid item xs={12}>
									<SkuDetailsMx mexico={mexico} setmexico={setmexico} />
									<br />
									<Box sx={{ mb: 2 }}>
										<Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
											Continue
										</Button>
										<Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
											Back
										</Button>
									</Box>
								</Grid>
							</Grid>
							<Typography />
						</StepContent>
					</Step>
					<Step>
						<StepLabel>Shippping Details</StepLabel>
						<StepContent>
							<Grid container spacing={3}>
								<Grid item xs={6}>
									<SkuSummary arregloskus={arregloskus} />
								</Grid>
								<Grid item xs={6}>
									<Totalvalormexico mexico={mexico} />
								</Grid>
							</Grid>
							<Typography />
							<br />
							<Box sx={{ mb: 2 }}>
								<div>
									<Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
										Continue
									</Button>
									<Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
										Back
									</Button>
								</div>
							</Box>
						</StepContent>
					</Step>
				</Stepper>
				{activeStep === steps.length && (
					<Paper square elevation={0} sx={{ p: 3 }}>
						<Typography>All steps completed - you&apos;re finished</Typography>
						<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
							Reset
						</Button>
					</Paper>
				)}
			</Paper>

			<Grid container spacing={3}>
				<Grid item xs={12}>
					{/* hidden.hiddenlocation ? <Paper className={classes.paper}><AddressComponent sethidden={sethidden} datosfinales={datosfinales} setdatosfinales={setdatosfinales} /></Paper> : null */}
				</Grid>
				<Grid item xs={12}>
					{/* hidden.hiddenbultos ? (
						<Paper className={classes.paper}>
							<Skutipobulto
								sethidden={sethidden}
								datosfinales={datosfinales}
								setdatosfinales={setdatosfinales}
							/>
						</Paper>
					) : null */}
				</Grid>
				<Grid item xs={12}>
					{hidden.hiddenbultos ? (
						<Paper className={classes.paper}>
							<MxRates
								sethidden={sethidden}
								datosfinales={datosfinales}
								setdatosfinales={setdatosfinales}
							/>
						</Paper>
					) : null}
				</Grid>
				<Grid item xs={12}>
					{/* hidden.hiddenbox ? (
						<Paper className={classes.paper}>
							<{BoxComponent
								sethidden={sethidden}
								datosfinales={datosfinales}
								setdatosfinales={setdatosfinales}
							/>
						</Paper>
							) : null */}
				</Grid>
				<Grid item xs={12}>
					{hidden.hiddenfinal ? (
						<Paper className={classes.paper}>
							<Resumen sethidden={sethidden} datosfinales={datosfinales} />
						</Paper>
					) : null}
				</Grid>
			</Grid>
		</div>
	);
}
