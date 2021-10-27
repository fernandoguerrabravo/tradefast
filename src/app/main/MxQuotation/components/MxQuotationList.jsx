/* eslint-disable no-alert */
import { useState, react } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import Button from '@material-ui/core/Button';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import DataTable from 'react-data-table-component';
import IconButton from '@material-ui/core/IconButton';
import UseGetMxQuotation from '../hooks/UseGetMxQuotation';

const MxQuoationList = ({ hidden, sethidden, setarregloskus }) => {
	const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1
		},

		paper: {
			padding: theme.spacing(2),
			color: theme.palette.text.secondary
		}
	}));

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2
	});

	const classes = useStyles();

	const idcliente = 'abcdef';
	// const { data, loading } = useGetResearch(idcliente)

	const nuevacotizacion = event => {
		sethidden({
			...hidden,
			hiddenlista: false,
			hiddencotizacion: true
		});
		setarregloskus({
			arreglosdelsku: [],
			totalfob: '',
			totalsku: '',
			totalduties: '',
			totalotherduties: ''
		});
	};
	const { data } = UseGetMxQuotation(idcliente);

	console.log('datos para tabla:', data);

	const bodegas = event => {
		switch (event) {
			case '2300':
				return 'Fedex, CDMX C.P. 02300 MX';

			case '45679':
				return 'Fedex, JALISCO C.P. 45679';

			case '66628':
				return 'Fedex, NUEVO LEON C.P. 66628';

			default:
				return 'N/A';
		}
	};

	const columnas = [
		{
			title: 'Origin',
			field: '',
			render: rowData => bodegas(rowData.mexico.bodegamx)
		},
		{
			title: 'Destination',
			field: '',
			render: rowData => 'Fedex HUB, Laredo 78045 TX, USA'
		},
		{
			title: 'Pallets to Export',
			field: '',
			render: rowData => rowData.mexico.qtypallets
		},
		{
			title: 'Sku to Export',
			field: '',
			render: rowData => rowData.skus.totalsku
		},
		{
			title: 'Total FOB',
			field: '',
			render: rowData => formatter.format(rowData.skus.totalfob)
		},
		{
			title: 'Handling Out Pack',
			field: '',
			render: rowData => rowData.mexico.packoutmexico[0].tipo
		},
		{
			title: 'Qty Out',
			field: '',
			render: rowData => rowData.mexico.packoutmexico[0].qtyout
		},
		{
			title: 'Total Cost',
			field: '',
			render: rowData => formatter.format(rowData.mexico.totalflete + rowData.mexico.totalhandlingout)
		},
		{
			title: 'Date Creation',
			field: '',
			render: rowData => rowData.fecha_creacion
		}
	];

	const actions = [
		{
			tooltip: 'Edit',
			onClick: (event, rowData) => alert(rowData.sku),
			icon: () => (
				<IconButton aria-label="delete">
					<img src="https://fotos-ecl.s3.amazonaws.com/icons8-editar.svg" alt="edit" width="15" height="15" />
				</IconButton>
			)
		}
	];

	return (
		<>
			<MaterialTable
				title="Quotation List"
				columns={columnas}
				data={data}
				options={{
					headerStyle: {
						backgroundColor: '#000',
						color: '#FFF'
					},

					actionsColumnIndex: -1
				}}
				components={{
					Toolbar: props => (
						<div style={{ backgroundColor: 'primary' }}>
							<MTableToolbar {...props} />
							<div style={{ padding: '20px 20px' }}>
								<Button onClick={nuevacotizacion} variant="contained" color="secondary">
									+ New Quotation
								</Button>
							</div>
						</div>
					)
				}}
			/>
		</>
	);
};

export default MxQuoationList;
