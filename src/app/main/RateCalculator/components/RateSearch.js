import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch'
		}
	},

	formControl: {
		margin: theme.spacing(2),
		minWidth: 400,
		padding: '50px 50px 0px 0px'
	}
}));

export default function RateSearch({ setencabezado }) {
	const classes = useStyles();

	const [datos, setDatos] = useState({
		country: '',
		hts: ''
	});

	const handleInputChange = event => {
		// console.log(event.target.name)
		// console.log(event.target.value)
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		});
	};

	// console.log(datos);

	const handleSubmit = e => {
		e.preventDefault();
		setencabezado({
			...datos,
			destination: 'United States',
			hidden: true
		});

		setDatos({
			country: '',
			hts: '',
			destination: 'United States'
		});
	};

	return (
		<form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
			<FormControl className={classes.formControl}>
				<InputLabel id="origin">From: (Country Origin)</InputLabel>
				<Select
					labelId="origin"
					id="originselect"
					value=""
					// onChange=''
				>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
			<FormControl className={classes.formControl}>
				<InputLabel id="destintation">To: (Country Destination)</InputLabel>
				<Select labelId="destination" id="destination" value="">
					<MenuItem value={10}>United State</MenuItem>
				</Select>
			</FormControl>
		</form>
	);
}
