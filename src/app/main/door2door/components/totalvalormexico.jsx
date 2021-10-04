import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import Paper from '@material-ui/core/Paper';
import { green, red, blue, orange } from '@material-ui/core/colors';
import { Divider, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Icon from '@material-ui/core/Icon';
import { composeInitialProps } from 'react-i18next';
import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import UseGetMexico from '../hooks/UseGetMexico';

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

export default function Totalvalormexico({ mexico }) {
	const classes = useStyles();
	const [value, setValue] = React.useState('');

	const datos = UseGetMexico(mexico);
	const datfinales = datos.data;
	const handleChange = event => {
		setValue(event.target.value);
	};

	return (
		<Paper className={classes.paper}>
			<Typography className={classes.titles} variant="subtitle1">
				<strong>Shipping Cost Summary</strong>
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
							<TableCell>Shipping Cost MX Fedex - Laredo Tx</TableCell>
							<TableCell style={{ color: green[900] }}>
								{new Intl.NumberFormat('en-US', {
									style: 'currency',
									currency: 'USD'
								}).format(datfinales.total)}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Average Cost per Kg</TableCell>
							<TableCell style={{ color: green[900] }}>
								{new Intl.NumberFormat('en-US', {
									style: 'currency',
									currency: 'USD'
								}).format(datfinales.kilomedio)}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
}
