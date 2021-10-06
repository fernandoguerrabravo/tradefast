import React, { useState } from 'react';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Avatar, Tooltip } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { green, red, blue } from '@material-ui/core/colors';
import InfoIcon from '@material-ui/icons/Info';
import ModalSku from 'app/main/door2door/components/ModalSku';
import FinishSelected from './FinishSelected';
import { star } from '../hooks/star';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	table: {
		minWidth: 750,
		padding: theme.spacing(2)
	},

	paper: {
		padding: theme.spacing(2),
		// textAlign: 'center',
		color: theme.palette.text.primary
	},

	formControl: {
		margin: theme.spacing(1),
		minWidth: 200,
		padding: theme.spacing(1)
	},

	formControl2: {
		margin: theme.spacing(1),
		minWidth: 300,
		padding: theme.spacing(1)
	},

	media: {
		width: '30%',
		height: 0,
		paddingTop: '56.25%' // 16:9
	}
}));

const reviews = (info, info2) => {
	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				Total Reviews: {info2} <br />
			</div>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{info}</div>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{star(info)}</div>
		</>
	);
};

const link = asin => {
	const linkin = `https://www.amazon.com/dp/${asin}`;
	return (
		<>
			<a href={linkin} target="_blank" rel="noreferrer">
				{asin}
			</a>
		</>
	);
};

const SelectedResearch = ({ setescondidoinicial, selected, category }) => {
	const [escondido, setescondido] = useState({
		escondido: true
	});

	const crearsku = () => {
		setescondido({
			escondido: false
		});
	};

	const precios = [];
	let suma = 0;
	selected.forEach(datitos => {
		suma += parseFloat(datitos.price);
		precios.push(parseFloat(datitos.price));
	});

	const average = suma / selected.length;
	const max = Math.max.apply(Math.max, precios);
	const min = Math.min.apply(Math.min, precios);
	// console.log("PRECIOS SELECTED", min);

	const columnas = [
		{
			title: 'Imagen',
			field: 'url',
			render: rowData => <img src={rowData.url} style={{ width: 80 }} alt="producto" />
		},

		{
			title: 'ASIN',
			field: 'id',
			render: rowData => link(rowData.id)
		},

		{
			title: 'Description',
			field: 'title'
		},
		{
			title: 'Price',
			field: 'price'
		},

		{
			title: '',
			field: 'id'
		},
		{
			title: '',
			field: 'reviews',
			render: rowData => reviews(rowData.reviews, rowData.total_reviews)
		}
	];

	const classes = useStyles();

	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={2}>
					<Paper className={classes.paper}>
						<Avatar
							className={classes.root}
							src="https://fotos-ecl.s3.amazonaws.com/icons8-precio-bajo-48.png"
						/>
						<Typography color="primary" variant="h6">
							Min Price
						</Typography>
						<br />
						<Typography color="secondary" variant="h5">
							{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(min)}
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={2}>
					<Paper className={classes.paper}>
						<Avatar
							className={classes.root}
							src="https://fotos-ecl.s3.amazonaws.com/icons8-flujo-de-fondos-48.png"
						/>
						<Typography color="primary" variant="h6">
							Average Price
						</Typography>
						<br />
						<Typography color="secondary" variant="h5">
							{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(average)}
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={2}>
					<Paper className={classes.paper}>
						<Avatar
							className={classes.root}
							src="https://fotos-ecl.s3.amazonaws.com/icons8-etiqueta-de-precio-usd-48.png"
						/>
						<Typography color="primary" variant="h6">
							Max Price
						</Typography>
						<br />
						<Typography color="secondary" variant="h5">
							{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(max)}
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<FormControl variant="outlined" className={classes.formControl}>
							<Grid>
								{escondido.escondido ? (
									<Button onClick={crearsku} variant="outlined" color="primary">
										Create New Product{' '}
									</Button>
								) : null}
								&nbsp;&nbsp;
								{escondido.escondido ? (
									<Tooltip title="Create a New SKU. If you can't find it in the list">
										<InfoIcon style={{ color: green[500] }} />
									</Tooltip>
								) : null}
							</Grid>
							&nbsp;&nbsp;
							{escondido.escondido ? null : <ModalSku setescondido={setescondido} />}
						</FormControl>
						<FormControl variant="outlined" className={classes.formControl2}>
							{escondido.escondido ? (
								<FinishSelected
									setescondidoinicial={setescondidoinicial}
									selected={selected}
									average={average}
									max={max}
									min={min}
									category={category}
								/>
							) : null}
							<b />
						</FormControl>
					</Paper>
				</Grid>
				<br />
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<MaterialTable
							style={{ zIndex: 0 }}
							className={classes.table}
							columns={columnas}
							data={selected}
						/>
					</Paper>
				</Grid>
			</Grid>
		</>
	);
};

export default SelectedResearch;
