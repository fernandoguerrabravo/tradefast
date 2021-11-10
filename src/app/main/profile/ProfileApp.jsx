import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import SkuStoreFiles from './components/SkuStoreFiles';
import Lister from './components/SkuListFiles';
import SkuStoreForm from './components/SkuStoreForm';

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

export default function ProfileApp() {
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
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<SkuStoreForm />
				</Grid>

				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<SkuStoreFiles skus="legales" idcliente="abcdef" />
					</Paper>{' '}
				</Grid>
				<Grid item xs={6}>
					<Lister idcliente="abcdef" codigo="legales" />
				</Grid>
			</Grid>
		</div>
	);
}
