import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { deepOrange, green, red, blue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
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
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary
	},
	formControl2: {
		margin: theme.spacing(1),
		minWidth: 300,
		padding: theme.spacing(1)
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
	icons: {
		fontSize: 'small',
		backgroundColor: red[500],
		color: '#e47911'
	},

	table: {
		minWidth: 200
	},

	square: {
		color: theme.palette.getContrastText(green[500]),
		backgroundColor: green[500],
		width: theme.spacing(7),
		height: theme.spacing(7)
	}
}));

const SkuSummary = ({ arregloskus }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper style={{ backgroundColor: '#F6F6F6' }} className={classes.paper}>
				<Typography variant="h6" gutterBottom>
					<strong>SKU Summary</strong>
				</Typography>
				<TableContainer>
					<Table className={classes.table} size="small" aria-label="a dense table">
						<TableHead>
							<TableRow>
								<TableCell />
								<TableCell />
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>Total Sku Codes</TableCell>
								<TableCell style={{ color: green[900] }}>{arregloskus.totalsku}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Total FOB US$</TableCell>
								<TableCell style={{ color: green[900] }}>
									{new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: 'USD'
									}).format(arregloskus.totalfob)}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Total Estimated Duties</TableCell>
								<TableCell style={{ color: green[900] }}>
									{new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: 'USD'
									}).format(arregloskus.totalduties)}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell> Other Duties (Total)</TableCell>
								<TableCell style={{ color: green[900] }}>
									{new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: 'USD'
									}).format(arregloskus.totalotherduties)}{' '}
									&nbsp;&nbsp;
									<Tooltip title="Harbour Maintenance Fee, Merchandise Processing Fee">
										<InfoIcon style={{ color: '#e47911' }} className={classes.icon} />
									</Tooltip>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</div>
	);
};

export default SkuSummary;
