import { useState, react } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import Button from '@material-ui/core/Button';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useGetSku } from '../hooks/useGetSku';

export default function SkuListTable({ oculto, setoculto, setskudetails }) {
	const crearsku = () => {
		setoculto({
			...oculto,
			hiddenstoreform: true,
			hiddentable: false,
			hiddenlistools: true
		});
	};

	const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1
		},

		paper: {
			padding: theme.spacing(2),
			color: theme.palette.text.secondary
		}
	}));

	const classes = useStyles();

	const idcliente = 'abcdef';
	// const { data, loading } = useGetResearch(idcliente)

	const details = event => {
		setskudetails({
			idcliente: 'abcdef',
			skunumber: event
		});

		setoculto({
			hidden: false
		});
	};

	const { data } = useGetSku(idcliente);

	console.log('datos para tabla:', data);

	const columnas = [
		{
			title: 'SKU',
			field: 'sku'
		},
		{
			title: 'Short Description',
			field: 'shortdescription'
		},
		{
			title: 'Country Origin',
			field: 'country_origin'
		},

		{
			title: 'Date Creation',
			field: 'fecha_creacion'
		}
	];

	const actions = [
		{
			icon: () => <RemoveRedEyeIcon className={classes.paper} color="primary" fontSize="large" />,
			tooltip: 'View Details',
			onClick: (event, rowData) => details(rowData.sku)
		}
	];

	return (
		<>
			<MaterialTable
				title="Products Details"
				columns={columnas}
				data={data}
				actions={actions}
				components={{
					Toolbar: props => (
						<div style={{ backgroundColor: 'primary' }}>
							<MTableToolbar {...props} />
							<div style={{ padding: '20px 20px' }}>
								<Button onClick={crearsku} variant="contained" color="secondary">
									+ New Product
								</Button>
							</div>
						</div>
					)
				}}
			/>
		</>
	);
}
