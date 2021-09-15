import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import UseGetRatesBrLcl from '../hooks/UseGetRatesBrLcl';
import UseGetCustomsusa from '../hooks/UseGetCustomusa';
import UseGetLastmileibc from '../hooks/UseGetLastmileibc';
import UseGetRateIntegradores from '../hooks/UseGetRateIntegradores';
import ShippoItem from './ShippoItem';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

export default function Resumen({ sethidden, datosfinales }) {
	const classes = useStyles();

	const mostrar = () => {
		console.log('PARA CALCULAR: ', datosfinales);
	};

	/* export_rate_brazil: 316.92775
      international_freight: 6.237
      total_first_mile_brazil: 15.05808144
      total_local_cost: 331.47513812154693 
      */
	const lclrate = UseGetRatesBrLcl(datosfinales);
	const lclratefinal = lclrate.data;
	const customusa = UseGetCustomsusa(datosfinales);
	const customusafinal = customusa.data;
	const lastmileibc = UseGetLastmileibc(datosfinales);
	const lastmileibcfinal = lastmileibc.data;

	console.log('ultima milla ibc ', lastmileibcfinal);
	console.log('ultima milla ibc ', lclratefinal);
	console.log('ultima milla ibc ', customusafinal);

	const shippo = UseGetRateIntegradores(datosfinales);
	const shippofinal = shippo.data;
	console.log('SHIPPO:', shippofinal);
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Typography variant="h4" component="h4">
							Door to Door Shipment Summary
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Button onClick={mostrar} variant="contained" color="secondary">
							Save Quotation
						</Button>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						Total Sku : {datosfinales.skus.totalsku}
						<br />
						Total FOB : {datosfinales.skus.totalfob}
						<br />
						Total Duties : {datosfinales.skus.totalduties}
						<br />
						Total Other Duties: {datosfinales.skus.totalotherduties}
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						Total Boxes : {datosfinales.boxes.totalqty}
						<br />
						Total Kg : {datosfinales.boxes.totalkg}
						<br />
						Total Volume : {datosfinales.boxes.totalvol}
						<br />
						Total Other Duties: {datosfinales.skus.totalotherduties}
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<img
							src="https://fotos-ecl.s3.amazonaws.com/new-ecl-logo "
							alt="ecl"
							width="300"
							height="300"
						/>
						<br />
						Rate Door to Door Full Shipment Sea LCL
						<br />
						Transit Time 30 Days
						<br />
						<br />
						<strong>
							USD:{' '}
							{(
								lastmileibcfinal.lastmile_total +
								lclratefinal.total_lcl_brazil +
								customusafinal.total_clareance_usa
							).toFixed(2)}{' '}
						</strong>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					{shippofinal.map(img => (
						<ShippoItem key={img} {...img} />
					))}
				</Grid>
			</Grid>
		</div>
	);
}
