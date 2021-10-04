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
// import useGetSkuDetails from '../hooks/useGetSkuDetails';
import { useGetSku } from '../hooks/useGetSku';

const useStyles = makeStyles(theme => ({
	type: {
		padding: theme.spacing(1),
		color: theme.palette.text.secondary
	}
}));

// Funcion para renderizar mis detalles

export default function PreviewCard({ event }) {
	// const info = useGetSkuDetails(event.skunumber);
	// const infofinal = info.data;
	const classes = useStyles();
	const idcliente = 'abcdef';
	const sku = useGetSku(idcliente);
	const skufinal = sku.data;

	const [skudetails, setskudetails] = useState({});

	skufinal.forEach(valores => {
		if (valores.sku === event.skunumber) {
			setskudetails({
				fob: valores.fob,
				shortdescription: valores.shortdescription,
				sku: event.skunumber,
				hts8: valores.htsclas?.hts ?? '',
				duties: valores.htsclas?.duties ?? '',
				htsdescription: valores.htsclas?.description ?? '',
				FTA: valores?.htsclas?.special ?? '',
				List301: valores?.htsclas?.list301 ?? '',
				tax301: valores?.htsclas?.duties301 ?? '',
				dutiesrate: valores.htsclas?.dutiesrate ?? ''
			});
		}
	});

	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={4}>
					<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
						<TableHead>
							<TableRow>
								<TableCell>Dessert (100g serving)</TableCell>
								<TableCell align="right">Calories</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>
									<strong>SKU Code</strong>
								</TableCell>
								<TableCell>{skudetails.sku}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									<strong>Short Description</strong>
								</TableCell>
								<TableCell>{skudetails.shortdescription}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									<strong>FOB</strong>
								</TableCell>
								<TableCell>
									{' '}
									{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
										skudetails.fob
									)}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									<strong>Country Origin</strong>
								</TableCell>
								<TableCell>{skudetails.country_origin}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									<strong>HTS</strong>
								</TableCell>
								<TableCell>{skudetails.hts8}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									<strong>General Duties</strong>
								</TableCell>
								<TableCell />
							</TableRow>
							<TableRow>
								<TableCell>
									<strong>Others Duties</strong>
								</TableCell>
								<TableCell />
							</TableRow>
							<TableRow>
								<TableCell>
									<strong>CBP Description</strong>
								</TableCell>
								<TableCell />
							</TableRow>
							<TableRow>
								<TableCell>
									<strong>Categories</strong>
								</TableCell>
								<TableCell />
							</TableRow>
							<TableRow>
								<TableCell>
									<strong>Min Sell Price</strong>
								</TableCell>
								<TableCell />
							</TableRow>
							<TableRow>
								<TableCell>
									<strong>Average Sell Price</strong>
								</TableCell>
								<TableCell />
							</TableRow>
							<TableRow>
								<TableCell>
									<strong>Max Sell Price</strong>
								</TableCell>
								<TableCell />
							</TableRow>
						</TableBody>
					</Table>
				</Grid>
			</Grid>
		</div>
	);
}
