/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
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

const MxCalculadoraApp = ({ mexico, setmexico }) => {
	const classes = useStyles();

	const [finales, setfinales] = useState({
		totalflete: 0,
		totalhandlingout: 0,
		bodegamx: '',
		packoutmexico: [],
		tipoflete: '',
		qtypallets: ''
	});

	const [handout, sethandout] = useState({
		out: 0
	});

	const [outlista, setoutlista] = useState({
		lista: []
	});

	const [hidden, sethidden] = useState({
		ltl: false,
		ftl: false,
		expo: false,
		summary: false
	});

	// cambio en setmexico para cuando tenemos valores de primera milla
	useEffect(() => {
		setmexico({
			...mexico,
			bodegamx: finales.bodegamx,
			qtypallets: finales.qtypallets,
			tipoflete: finales.tipoflete,
			totalflete: finales.totalflete,
			totalhandlingout: finales.totalhandlingout,
			packoutmexico: finales.packoutmexico
		});
	}, [finales]);

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<MxTipoBulto hidden={hidden} sethidden={sethidden} finales={finales} setfinales={setfinales} />
					</Paper>{' '}
				</Grid>
				<br />

				{/* hidden.summary ? (
					<Grid item xs={6}>
						<Paper className={classes.paper}>
							{' '}
							<MxSummary setfinales={setfinales} finales={finales} handout={handout} />
						</Paper>
					</Grid>
				) : null */}
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
								finales={finales}
								setfinales={setfinales}
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
