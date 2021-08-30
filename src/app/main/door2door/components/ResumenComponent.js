import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import UseGetRatesBrLcl from '../hooks/UseGetRatesBrLcl';
import UseGetCustomsusa from '../hooks/UseGetCustomusa';
import UseGetLastmileibc from '../hooks/UseGetLastmileibc';

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

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>Door to Door Shipment Summary</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Button onClick={mostrar} variant="contained" color="primary">
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
						{lastmileibcfinal.lastmile_total}
						<br />
						{lclratefinal.total_lcl_brazil}
						<br />
						{customusafinal.total_clareance_usa}
						<br />
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>xs=3</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>xs=3</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>xs=3</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
