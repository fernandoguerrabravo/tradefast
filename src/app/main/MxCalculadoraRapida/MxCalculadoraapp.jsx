import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MxTipoBulto from './components/MxTipoBulto';
import MxExpoPallet from './components/MxExpoPallet';
import MxExpoPalletFTL from './components/MxExpoPalletFTL';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary
	}
}));

const MxCalculadoraApp = () => {
	const classes = useStyles();

	const [mexico, setmexico] = useState({
		codigo_fba: 'PHX5',
		fedexwarehouse: '',
		qty_pallet: '',
		arreglodelpack: []
	});

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<MxTipoBulto />
					</Paper>{' '}
					<br />
					<Paper className={classes.paper}>
						<MxExpoPalletFTL />
					</Paper>
					<br />
					<Paper className={classes.paper}>
						<MxExpoShipping />
					</Paper>
				</Grid>
				<Grid item xs={12} />
			</Grid>
		</div>
	);
};

export default MxCalculadoraApp;

// {encabezado.hidden && <HtsGrid encabezado = {encabezado}/>}
