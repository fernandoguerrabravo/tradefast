import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	paper: {
		padding: theme.spacing(5),
		color: theme.palette.text.secondary,
		alignItems: 'center'
	}
}));

export default function RateApp() {
	const classes = useStyles();

	const [encabezado, setencabezado] = useState([
		{
			country: '',
			hts: '',
			hidden: false,
			destination: ''
		}
	]);

	// Creo el estado del detalles de la cotizacion que se eligira , para mostrarlo

	return (
		<div className={classes.root}>
			{' '}
			<Paper className={classes.paper}>
				<Grid container spacing={3}>
					<Grid alignItems="center" item xs={4}>
						<img src="https://fotos-ecl.s3.amazonaws.com/Reglas+de+Origen.svg" alt="origen1" />
					</Grid>
					<Grid alignItems="center" item xs={4}>
						<img src="https://fotos-ecl.s3.amazonaws.com/Reglas+de+Origen+(3).svg" alt="origen2" />
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
