import { useState, react } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import Button from '@material-ui/core/Button';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import UseGetMxQuotation from '../hooks/UseGetMxQuotation';
import UseGetMexico from '../hooks/UseGetMexico';

const MxQuoationList = ({ hidden, sethidden }) => {
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

	const nuevacotizacion = () => {
		sethidden({
			...hidden,
			hiddenlista: false,
			hiddencotizacion: true
		});
	};
	const { data } = UseGetMxQuotation(idcliente);

	console.log('datos para tabla:', data);

	const columnas = [
		{
			title: '#',
			field: '',
			render: rowData => data.indexOf(rowData) + 1
		},
		{
			title: 'Pallets to Export',
			field: '',
			render: rowData => rowData.mexico.qty_pallet
		},
		{
			title: 'Sku to Export',
			field: '',
			render: rowData => rowData.skus.totalsku
		},
		{
			title: 'Total FOB',
			field: '',
			render: rowData => rowData.skus.totalfob
		},
		{
			title: 'Handling Out Pack',
			field: '',
			render: rowData => rowData.mexico.arreglodelpack[0].tipo
		},
		{
			title: 'Qty Out',
			field: '',
			render: rowData => rowData.mexico.arreglodelpack[0].qtyout
		},
		{
			title: 'Qty Out',
			field: '',
			render: rowData => console.log('pichula', rowData)
		}
	];

	/* const actions = [{
          
            tooltip: 'View Details',
            onClick: (event, rowData) => details(rowData.sku),
            icon: () => <RemoveRedEyeIcon style={{
                color: '#e39d3b'
            }}
            fontSize="large"/>
        }]; */

	return (
		<MaterialTable
			title="Products List"
			columns={columnas}
			data={data}
			options={{
				headerStyle: {
					backgroundColor: '#000',
					color: '#FFF'
				}
			}}
			components={{
				Toolbar: props => (
					<div style={{ backgroundColor: 'primary' }}>
						<MTableToolbar {...props} />
						<div style={{ padding: '20px 20px' }}>
							<Button onClick={nuevacotizacion} variant="contained" color="primary">
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
