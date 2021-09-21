import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HtsGrid from './components/HtsGrid';
import HtsGrid2 from './components/HtsGrid2';
import Htsbegin from './components/htsbegin';
import { ListHtsTools } from './components/ListHtsTools';

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

export default function FullWidthGrid() {
	const classes = useStyles();

	const [encabezado, setencabezado] = useState([
		{
			country: '',
			hts: '',
			hidden: false,
			hidden1: false,
			destination: '',
			hts8: '',
			general: '',
			special: '',
			duties: '',
			dutiespecific: '',
			list301: '',
			duties301: ''
		}
	]);

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12}>
					<ListHtsTools setencabezado={setencabezado} />
				</Grid>
				<Grid item xs={12} sm={12}>
					<Paper className={classes.paper}>
						<Htsbegin setencabezado={setencabezado} />
					</Paper>
				</Grid>
				{encabezado.hidden && <HtsGrid2 encabezado={encabezado} setencabezado={setencabezado} />}
				{encabezado.hidden1 && <HtsGrid encabezado={encabezado} setencabezado={setencabezado} />}
			</Grid>
		</div>
	);
}
