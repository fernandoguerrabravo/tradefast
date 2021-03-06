import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import Paper from '@material-ui/core/Paper';
import { green, red, blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex-grow',
		alignItems: 'center',
		width: '100%',
		margin: theme.spacing(0),
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
		margin: theme.spacing(3),
		minWidth: 500
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export default function Htsbegin({ setencabezado }) {
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

	function onKeyDown(keyEvent) {
		if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
			keyEvent.preventDefault();
		}
	}
	// console.log(datos);

	const handleSubmit = e => {
		e.preventDefault();
		if (datos.hts.trim().length > 3) {
			setencabezado({
				...datos,
				destination: 'United States',
				hidden: true,
				hidden3: false
			});

			setDatos({
				country: '',
				hts: '',
				destination: 'United States'
			});
		} else {
			swal({
				title: 'oops!',
				text: 'Insert a valid Information or Country !!',
				icon: 'warning'
			});
		}
	};

	return (
		<>
			<FormControl variant="outlined" className={classes.formControl}>
				<TextField
					id="hts"
					name="hts"
					label="HTS Code (6 Digits) or Keyword"
					variant="outlined"
					color="secondary"
					type="text"
					value={datos.hts}
					onChange={handleInputChange}
				/>
			</FormControl>
			<br />
			<Button onClick={handleSubmit} variant="contained" color="primary">
				Search Classifications
			</Button>
		</>
	);
}
