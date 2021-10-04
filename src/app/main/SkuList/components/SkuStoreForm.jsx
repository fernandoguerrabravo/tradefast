import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { green, red, blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Select from 'react-select';
import swal from 'sweetalert';
import { Divider, Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import Paper from '@material-ui/core/Paper';
import Swal from 'sweetalert2';
import UseGetCountry from '../../hooks/useGetCountry';
import SaveSku from '../helpers/SaveSku';
import SkuStoreFiles from './SkuStoreFiles';

const styles = theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(1)
	}
});

const styles2 = makeStyles(theme => ({
	icons: {
		fontSize: 'small',
		backgroundColor: red[500],
		color: red[500]
	},

	formControl2: {
		minWidth: 100,
		padding: theme.spacing(1)
	},

	formControl1: {
		minWidth: 100,
		padding: theme.spacing(1)
	},
	button: {
		leftmargin: 200,
		padding: theme.spacing(1),
		textAlign: 'right'
	},

	paper: {
		padding: theme.spacing(3),
		color: theme.palette.text.secondary
	}
}));

export default function SkuStoreForm({ setoculto }) {
	const classes2 = styles2();
	const [guardarsku, setguardarsku] = useState({
		id_cliente: 'abcdef',
		sku: '',
		shortdescription: '',
		fob: '',
		country_origin: '',
		upc_number: ''
	});

	const handlingChange = event => {
		setguardarsku({
			...guardarsku,
			[event.target.name]: event.target.value
		});
		console.log(guardarsku);
	};

	const SelectChange = event => {
		setguardarsku({
			...guardarsku,
			country_origin: event.value
		});
		console.log(guardarsku);
	};

	const Save = async () => {
		if (guardarsku.sku !== '' && guardarsku.shortdescription !== '' && guardarsku.country_origin !== '') {
			SaveSku(guardarsku)
				.then(
					await Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Your work has been saved',
						showConfirmButton: false,
						timer: 1500
					})
				)
				.then(result => {
					setoculto({
						hiddenlistools: false,
						hiddenstoreform: false,
						hiddentable: true,
						hiddendetails: false
					});
				});
		} else {
			Swal.fire({
				title: 'oops!',
				text: 'Please complete all fields!!',
				icon: 'warning'
			});
		}
	};

	const country = UseGetCountry();
	const countryfinal = country.data;

	const newJson1 = [];
	countryfinal.forEach(pais => {
		newJson1.push({
			value: pais.Name,
			label: pais.Name
		});
	});

	const [hidden, sethidden] = useState({
		escondido: false
	});
	const [clas, useclas] = useState({
		datos: ''
	});
	const buscarhts = () => {
		sethidden({ escondido: true });
		useclas({ datos: guardarsku.shortdescription });
	};

	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Paper className={classes2.paper}>
						<Typography variant="h5" gutterBottom className={classes2.formControl2}>
							<strong>Basic Information</strong>
						</Typography>
						<Typography
							maxwidth
							style={{ textAlign: 'center' }}
							className={classes2.formControl2}
							gutterBottom
						>
							<Button
								onClick={Save}
								startIcon={<SaveIcon />}
								size="small"
								variant="contained"
								color="primary"
							>
								Save Product
							</Button>
						</Typography>
						<br />
						<Divider />
						<br />
						<FormControl className={classes2.formControl2} variant="outlined">
							<TextField
								id="sku"
								name="sku"
								label="Product Code (SKU)"
								variant="outlined"
								color="primary"
								type="text"
								value={guardarsku.sku}
								onChange={handlingChange}
							/>
							<Typography variant="caption" gutterBottom>
								Input Your SKU Code
							</Typography>

							<TextField
								id="upc_number"
								name="upc_number"
								label="UPC Number"
								variant="outlined"
								color="primary"
								type="number"
								value={guardarsku.upc_number}
								onChange={handlingChange}
							/>
							<Typography variant="caption" gutterBottom>
								Input UPC Code (Optional)
							</Typography>

							<TextField
								id="fob"
								name="fob"
								label="FOB Value"
								variant="outlined"
								color="primary"
								type="number"
								value={guardarsku.fob}
								onChange={handlingChange}
								InputProps={{
									startAdornment: <InputAdornment position="start">US$</InputAdornment>
								}}
							/>
							<Typography variant="caption" gutterBottom>
								Unit FOB Value
							</Typography>

							<TextField
								id="shortdescription"
								name="shortdescription"
								label="Short Description"
								variant="outlined"
								color="primary"
								type="text"
								value={guardarsku.shortdescription}
								onChange={handlingChange}
							/>
							<Typography variant="caption" gutterBottom>
								Input the Best Description
							</Typography>

							<Select
								id="country_origin"
								name="country_origin"
								options={newJson1}
								onChange={SelectChange}
							/>
							<Typography variant="caption" gutterBottom>
								Select Country Origin
							</Typography>
						</FormControl>
					</Paper>
				</Grid>
				<br />
				<Grid item xs={6}>
					<Divider />
					<br />
					<SkuStoreFiles skus={guardarsku.sku} idcliente={guardarsku.id_cliente} />
				</Grid>
			</Grid>
		</div>
	);
}
