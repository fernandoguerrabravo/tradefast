import React, { useState } from 'react';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from 'react-select';
import { UseGetSku } from 'app/main/door2door/hooks/useGetSku';
import { green, red, blue } from '@material-ui/core/colors';
import Swal from 'sweetalert2';
import { UpdateSku } from '../helpers/UpdateSku';

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
		textAlign: 'center',
		color: theme.palette.text.primary
	},

	formControl: {
		margin: theme.spacing(1),
		minWidth: 450
	},
	formControl2: {
		margin: theme.spacing(1),
		minWidth: 340,
		padding: theme.spacing(1)
	},
	media: {
		width: '30%',
		height: 0,
		paddingTop: '56.25%' // 16:9
	}
}));

const FinishSelected = ({ selected, average, max, min, setescondidoinicial, category }) => {
	const classes = useStyles();
	const idcliente = 'abcdef';
	const sku = UseGetSku(idcliente);
	const skufinal = sku.data;
	const newJson1 = [];
	skufinal.forEach(event => {
		event.res !== true
			? newJson1.push({
					value: event.sku,
					label: event.sku
			  })
			: null;
	});

	// Defino mi arreglo final para enviar a la base de datos

	const [final, setfinal] = useState({
		sku: '',
		average,
		max,
		min,
		keyword: category,
		data: selected
	});

	const handleInputChange = event => {
		setfinal({
			...final,
			sku: event.value
		});
	};

	const updatesku = async () => {
		console.log('A grabar: ', final);

		UpdateSku(final)
			.then(
				await Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Your work has been saved',
					showConfirmButton: false,
					timer: 1500
				})
			)
			.then(result => {
				setescondidoinicial({ escondidoinicial: true });
			});
	};

	return (
		<>
			<Select options={newJson1} onChange={handleInputChange} />
			<Typography className={classes.titles} style={{ color: red[400] }} variant="caption" gutterBottom>
				<strong>Search Your Saved SKU Code</strong>
			</Typography>
			<Button onClick={updatesku} variant="contained" color="primary">
				Finish an Save
			</Button>
		</>
	);
};

export default FinishSelected;
