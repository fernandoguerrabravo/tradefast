/* eslint-disable radix */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import Paper from '@material-ui/core/Paper';
import { green, red, blue, orange } from '@material-ui/core/colors';
import { Box, Divider, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		display: 'flex-grow',
		alignItems: 'center',
		width: '100%',
		margin: theme.spacing(0),
		padding: theme.spacing(1),
		input: {
			marginLeft: theme.spacing(1),
			flex: 1
		},
		iconButton: {
			padding: 10
		},
		divider: {
			height: 28,
			margin: 4
		}
	},

	formControl: {
		margin: theme.spacing(1)
	},
	formControl2: {
		margin: theme.spacing(1)
	},
	selectEmpty: {
		marginTop: theme.spacing(1)
	},
	titles: {
		alignItems: 'left',
		flexGrow: 1,
		display: 'flex-grow',
		textAlign: 'left',
		padding: theme.spacing(1)
	},

	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary
	},

	icons: {
		fontSize: 'small',
		backgroundColor: red[500],
		color: red[500]
	},

	table: {
		minWidth: 200
	},
	paper1: {
		float: 'center',
		display: 'flex-grow',
		padding: theme.spacing(2),
		alignItems: 'center',
		flexGrow: 1,
		textAlign: 'center'
	},
	button: {
		margin: theme.spacing(1),
		color: blue[50]
	}
}));

const MxSummary = ({ finales, handout }) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2
	});

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper style={{ backgroundColor: '#F6F6F6' }} className={classes.paper}>
						<Grid item xs={12}>
							<Typography variant="h6" gutterBottom>
								<strong>Shipping Cost Summary</strong>
							</Typography>
							<Typography style={{ textAlign: 'right' }} gutterBottom>
								<strong >Powered by</strong>	
								<img
								src="https://fotos-ecl.s3.amazonaws.com/fedex.png"
								alt="fedex"
								width="100"
								height="100"
								align="right"
							/>
							</Typography>
						<p />
						<Paper style={{ backgroundColor: '#F6F6F6' }} className={classes.paper}>
							<TableContainer component={Paper}>
								<Table sx={{ minWidth: 700 }} aria-label="customized table">
									<TableHead />
									<TableBody>
										<TableRow>
											<TableCell component="th" scope="row">
												Tarifa MX to Laredo TX
											</TableCell>
											<TableCell component="th" scope="row" style={{ color: '#FF9900' }}>
												<strong>{formatter.format(finales.total)}</strong>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell component="th" scope="row">
												Handling Out Cost
											</TableCell>
											<TableCell component="th" scope="row" style={{ color: '#FF9900' }}>
												<strong>{formatter.format(handout.out)}</strong>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell component="th" scope="row">
												<Typography variant="h6">Total Shipping Cost:</Typography>
											</TableCell>
											<TableCell component="th" scope="row">
												<Typography variant="h6" style={{ color: '#FF9900' }}>
													<strong>{formatter.format(handout.out + finales.total)}</strong>
												</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell component="th" scope="row">
												Insurance (* optional):
											</TableCell>
											<TableCell component="th" scope="row">
												<Typography style={{ color: '#FF9900' }}>
													<strong>
														{finales.totalseguro
															? finales.totalseguro * 0.003 < 40
																? formatter.format(40)
																: formatter.format(finales.totalseguro * 0.003)
															: formatter.format(0)}
													</strong>
												</Typography>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</Paper>
						</Grid>{' '}
					</Paper>
					<br />
				</Grid>
			</Grid>
		</div>
	);
};

export default MxSummary;
