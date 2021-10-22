/* eslint-disable no-var */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MxTipoBulto from './components/MxTipoBulto';
import MxExpoPallet from './components/MxExpoPallet';
import MxExpoPalletFTL from './components/MxExpoPalletFTL';
import MxExpoShipping from './components/MxExpoShipping';
import MxSummary from './components/MxSummary';

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

	const [finales, setfinales] = useState({
		total: 0,
		totalseguro: 0,
		totalhandlingout: 0,
		subtotaltotal: 0,
		primeramilla: 0,
		totaltotal: 0
	});

	var [handout, sethandout] = useState({
		out: 0
	});
	const [outlista, setoutlista] = useState({
		lista: []
	});

	var [hidden, sethidden] = useState({
		ltl: false,
		ftl: false,
		expo: false,
		summary: false
	});
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<MxTipoBulto hidden={hidden} sethidden={sethidden} />
					</Paper>{' '}
				</Grid>
				<br />

				{hidden.summary ? (
					<Grid item xs={6}>
						<Paper className={classes.paper}>
							{' '}
							<MxSummary setfinales={setfinales} finales={finales} handout={handout} />{' '}
						</Paper>
					</Grid>
				) : null}
				<br />
				{hidden.ftl ? (
					<Grid item xs={6}>
						<Paper className={classes.paper}>
							{' '}
							<MxExpoPalletFTL finales={finales} setfinales={setfinales} />{' '}
						</Paper>
					</Grid>
				) : null}
				<br />
				{hidden.ltl ? (
					<Grid item xs={6}>
						<Paper className={classes.paper}>
							{' '}
							<MxExpoPallet finales={finales} setfinales={setfinales} />{' '}
						</Paper>
					</Grid>
				) : null}
				<br />
				{hidden.expo ? (
					<Grid item xs={6}>
						<Paper className={classes.paper}>
							<MxExpoShipping
								handout={handout}
								sethandout={sethandout}
								lista={outlista.lista}
								setoutlista={setoutlista}
							/>
						</Paper>
					</Grid>
				) : null}

				<Grid item xs={12} />
			</Grid>
		</div>
	);
};

export default MxCalculadoraApp;

// {encabezado.hidden && <HtsGrid encabezado = {encabezado}/>}
