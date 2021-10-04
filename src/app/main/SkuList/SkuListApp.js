import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SkuListTable from './components/SkuListTable';
import PreviewCard from './components/SkuListDetails';
import SkuListTools from './components/SkuListTools';
import SkuStoreForm from './components/SkuStoreForm';

export const SkuListApp = () => {
	const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1
		},

		paper: {
			padding: theme.spacing(3),
			color: theme.palette.text.secondary
		}
	}));

	const classes = useStyles();

	const [skudetails, setskudetails] = useState({
		skunumber: '',
		idcliente: 'abcdef'
	});

	const [oculto, setoculto] = useState({
		hiddenlistools: false,
		hiddenstoreform: false,
		hiddentable: true,
		hiddendetails: false
	});

	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					{oculto.hiddenlistools ? <SkuListTools setoculto={setoculto} /> : null}
				</Grid>
				<Grid item xs={12}>
					{oculto.hiddentable ? (
						<Paper className={classes.paper}>
							{' '}
							<SkuListTable oculto={oculto} setoculto={setoculto} setskudetails={setskudetails} />
						</Paper>
					) : null}
				</Grid>
				<Grid item xs={12}>
					{oculto.hiddendetails ? <PreviewCard event={skudetails} /> : null}
				</Grid>
				<Grid item xs={12}>
					{oculto.hiddenstoreform ? <SkuStoreForm setoculto={setoculto} /> : null}
				</Grid>
			</Grid>
		</>
	);
};

export default SkuListApp;
