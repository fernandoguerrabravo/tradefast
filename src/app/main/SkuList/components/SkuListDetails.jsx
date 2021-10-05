/* eslint-disable import/named */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Typography } from '@material-ui/core';
import { green, red, blue } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useGetSkuDetails from '../hooks/useGetSkuDetails';
import Lister from './SkuListFiles';

const useStyles = makeStyles(theme => ({
	type: {
		padding: theme.spacing(1),
		color: theme.palette.text.secondary
	},
	paper: {
		padding: theme.spacing(3),
		color: theme.palette.text.secondary
	}
}));

// Funcion para renderizar mis detalles

export default function PreviewCard({ skudetails }) {
	// const info = useGetSkuDetails(event.skunumber);
	// const infofinal = info.data;
	const classes = useStyles();
	const idcliente = 'abcdef';
	// const sku = useGetSku(idcliente);
	// const skufinal = sku.data;
	const detallestotales = skudetails.skudetail;

	const detalles = useGetSkuDetails(detallestotales, skudetails.skunumber);
	const codigo = skudetails.skunumber;
	console.log(detalles);

	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">
							<TableBody>
								<TableRow>
									<TableCell>
										<strong>SKU</strong>
									</TableCell>
									<TableCell>{detalles.sku}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<strong>Description</strong>
									</TableCell>
									<TableCell>{detalles.shortdescription}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<strong>FOB</strong>
									</TableCell>
									<TableCell>
										{' '}
										{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
											detalles.fob
										)}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<strong>Origin</strong>
									</TableCell>
									<TableCell>{detalles.country_origin}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<strong>HTS</strong>
									</TableCell>
									<TableCell>{detalles.hts8}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<strong>Duties</strong>
									</TableCell>
									<TableCell>{detalles.duties}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<strong>FTA</strong>
									</TableCell>
									<TableCell>{detalles.special}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<strong>Section 301</strong>
									</TableCell>
									<TableCell>
										{detalles.list301} {detalles.tax301}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<strong>CBP</strong>
									</TableCell>
									<TableCell>{detalles.htsdescription}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<strong>Categories</strong>
									</TableCell>
									<TableCell>
										{detalles.categories0}
										{detalles.categories1}
										{detalles.categories2}
										{detalles.categories3}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Min Sell Price</TableCell>
									<TableCell>
										{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
											detalles.min
										)}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Average Price</TableCell>
									<TableCell>
										{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
											detalles.average
										)}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Max Sell Price</TableCell>
									<TableCell>
										{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
											detalles.max
										)}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</Paper>
				</Grid>

				<br />
				<Lister idcliente={idcliente} codigo={codigo} />
			</Grid>
		</div>
	);
}
