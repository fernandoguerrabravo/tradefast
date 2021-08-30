import React, { useState } from 'react';
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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Icon from '@material-ui/core/Icon';
import { composeInitialProps } from 'react-i18next';

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
		color: theme.palette.text.secondary,
		padding: theme.spacing(3),
		flexGrow: 1
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

export default function Skutipobulto({ sethidden, datosfinales, setdatosfinales }) {
	console.log(datosfinales);
	const classes = useStyles();
	const [value, setValue] = React.useState('');

	const handleChange = event => {
		setValue(event.target.value);
	};

	const nextpack = () => {
		if (value !== '') {
			setdatosfinales({
				...datosfinales,
				tipobulto: value
			});

			sethidden({
				hiddenbultos: false,
				hiddensku: false,
				hiddenbox: true,
				hiddenfinal: false,
				hiddenrate: false
			});
		} else {
			swal({
				title: 'oops!',
				text: 'Select your Shipping Packaging',
				icon: 'warning'
			});
		}
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						{' '}
						<Typography className={classes.titles} variant="subtitle1" gutterBottom>
							<strong>Select Your Packaging</strong>
						</Typography>
						<Divider />
						<br />
						<Typography
							className={classes.titles}
							style={{ color: green[600] }}
							variant="caption"
							gutterBottom
						>
							<strong>
								{' '}
								(2) In this section you must select the type of shipment you will perform based on your
								shipping plan.
							</strong>
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
						<Grid container spacing={10}>
							<Grid item xs={4}>
								<Paper className={classes.paper}>
									<Grid container spacing={2}>
										<img
											src="https://fotos-ecl.s3.amazonaws.com/icons8-pallets-512.png"
											height="50"
											width="50"
											alt=""
										/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<FormControlLabel value="b" control={<Radio />} label="Boxes" />
									</Grid>
								</Paper>
							</Grid>
							<Grid item xs={4}>
								<Paper className={classes.paper}>
									<Grid container spacing={2}>
										<img
											src="https://fotos-ecl.s3.amazonaws.com/icons8-plataforma-500.png"
											height="50"
											width="50"
											alt=""
										/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<FormControlLabel disabled value="p" control={<Radio />} label="Pallets" />
									</Grid>
								</Paper>
							</Grid>
							<Grid item xs={4}>
								<Paper className={classes.paper}>
									<Grid container spacing={2}>
										<img
											src="https://fotos-ecl.s3.amazonaws.com/icons8-contenedor-de-carga-500.png"
											height="50"
											width="50"
											alt=""
										/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<FormControlLabel
											disabled
											value="c"
											control={<Radio />}
											label="FCL Container"
										/>
									</Grid>
								</Paper>
							</Grid>
						</Grid>
					</RadioGroup>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper1}>
						<Button
							variant="contained"
							color="secondary"
							className={classes.button}
							endIcon={<Icon>send</Icon>}
							onClick={nextpack}
						>
							Next Step
						</Button>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
