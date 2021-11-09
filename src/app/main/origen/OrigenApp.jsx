import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';

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
					<Grid alignItems="center" item xs={4}>
						<Paper className={classes.paper}>
							<Grid item xs={12} md={12}>
								<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
									Links de Apoyo
								</Typography>
								<ListItem>
									<ListItemText>
										{' '}
										<Link
											href="http://www.sice.oas.org/trade/nafta_s/CAP04_1.asp#Cap.IV"
											underline="none"
											target="_blank"
											rel="noreferrer"
										>
											Sice - Reglas de Origen - TLC USA
										</Link>
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										{' '}
										<Link
											href="http://www.trade.gov/regional-value-content"
											underline="none"
											target="_blank"
											rel="noreferrer"
										>
											Trade.gov - Sobre Contenido Regional - TLC USA
										</Link>
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										{' '}
										<Link
											href="http://www2.aladi.org/SitioALADI/Reuniones/OMC/2019/PRESENTACIONORIGENOMC.pdf"
											underline="none"
											target="_blank"
											rel="noreferrer"
										>
											Aladi.org - Sobre Reglas de Origen
										</Link>
									</ListItemText>
								</ListItem>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
