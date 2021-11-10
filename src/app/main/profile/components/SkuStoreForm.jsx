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
		minWidth: 400,
		padding: theme.spacing(1)
	},

	formControl1: {
		minWidth: 400,
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

	/*	const Save = async () => {
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
	}; */

	// const country = UseGetCountry();
	// const countryfinal = country.data;

	/*	const newJson1 = [];
	countryfinal.forEach(pais => {
		newJson1.push({
			value: pais.Name,
			label: pais.Name
		});
	}); */

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
			<Paper className={classes2.paper}>
				<Typography variant="h5" gutterBottom className={classes2.formControl2}>
					<strong>Seller's Profile</strong>
				</Typography>
				<Typography style={{ textAlign: 'center' }} className={classes2.formControl2} gutterBottom>
					<Button startIcon={<SaveIcon />} size="small" variant="contained" color="secondary">
						Save Profile Information
					</Button>
				</Typography>
				<br />
				<Divider />
				<br />
				<FormControl className={classes2.formControl2} variant="outlined">
					<TextField
						id="legalname"
						name="legalname"
						label="Legal Name"
						variant="outlined"
						color="primary"
						type="text"
						// value={guardarsku.sku}
						// onChange={handlingChange}
					/>
					<Typography variant="caption" gutterBottom>
						Input Seller`s Legal Name
					</Typography>

					<TextField
						id="dbaname"
						name="dbaname"
						label="DBA Name"
						variant="outlined"
						color="primary"
						type="text"
						// value={guardarsku.upc_number}
						// onChange={handlingChange}
					/>
					<Typography variant="caption" gutterBottom>
						Input DBA Name (Optional)
					</Typography>
					<TextField
						id="contacto"
						name="contacto"
						label="Contact Name"
						variant="outlined"
						color="primary"
						type="text"
						// value={guardarsku.upc_number}
						// onChange={handlingChange}
					/>
					<Typography variant="caption" gutterBottom>
						Input Contact Name
					</Typography>
					<TextField
						id="email"
						name="email"
						label="email"
						variant="outlined"
						color="primary"
						type="text"
						// value={guardarsku.upc_number}
						// onChange={handlingChange}
					/>
					<Typography variant="caption" gutterBottom>
						Input Contact Email
					</Typography>

					<TextField
						id="address"
						name="adress"
						label="Legal Address"
						variant="outlined"
						color="primary"
						type="text"
						// value={guardarsku.fob}
						// onChange={handlingChange}
						/* InputProps={{
							startAdornment: <InputAdornment position="start">US$</InputAdornment>
						}} */
					/>
					<Typography variant="caption" gutterBottom>
						Legal Address (Number, Street, City)
					</Typography>

					<TextField
						id="estado"
						name="estado"
						label="State"
						variant="outlined"
						color="primary"
						type="text"
						// value={guardarsku.shortdescription}
						// onChange={handlingChange}
					/>
					<Typography variant="caption" gutterBottom>
						Input Country's State
					</Typography>
					<TextField
						id="zipcode"
						name="zipcode"
						label="Zip Code"
						variant="outlined"
						color="primary"
						type="text"
						// value={guardarsku.shortdescription}
						// onChange={handlingChange}
					/>
					<Typography variant="caption" gutterBottom>
						Input Zip Code
					</Typography>

					<Select id="country_origin" name="country_origin" onChange={SelectChange} />
					<Typography variant="caption" gutterBottom>
						Select Country
					</Typography>
				</FormControl>
			</Paper>

			<br />
		</div>
	);
}
