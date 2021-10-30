/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import { useState, react, useEffect } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import Button from '@material-ui/core/Button';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import DataTable from 'react-data-table-component';
import IconButton from '@material-ui/core/IconButton';
import UseGetMxQuotation from '../hooks/UseGetMxQuotation';
import DeleteQuotation from '../helpers/DeleteQuotation';

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

	const [datas, setdatas] = useState({
		datatable: []
	});
	const { data } = UseGetMxQuotation(idcliente);

	useEffect(() => {
		setdatas({ datatable: data });
	}, [data]);

	console.log('PICO', data);

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
			title: '#',
			field: '',
			render: rowData => rowData._id.$oid
		},

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
			tooltip: 'Delete',
			onClick: (event, rowData) => deleterow(rowData._id.$oid),
			icon: () => (
				<img
					src="https://fotos-ecl.s3.amazonaws.com/icons8-eliminar-64.png"
					alt="edit"
					width="20"
					height="20"
				/>
			)
		},
		{
			tooltip: 'Request Booking',
			onClick: (event, rowData) => alert(rowData.sku),
			icon: () => (
				<img
					src="https://fotos-ecl.s3.amazonaws.com/icons8-camio%CC%81n-verificado.svg"
					alt="edit"
					width="20"
					height="20"
				/>
			)
		}
		/* {
			tooltip: 'Edit',
			onClick: (event, rowData) => alert(rowData.sku),
			icon: () => (
				<img src="https://fotos-ecl.s3.amazonaws.com/icons8-editar.svg" alt="edit" width="20" height="20" />
			)
		}, */
	];

	const deleterow = e => {
		DeleteQuotation(e);
	};
	return (
		<MaterialTable
			title="Quotation List"
			columns={columnas}
			data={datas.datatable}
			options={{
				headerStyle: {
					backgroundColor: '#000',
					color: '#FFF'
				}
			}}
			actions={actions}
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
	);
};

export default MxQuoationList;
