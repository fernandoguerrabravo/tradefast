import { useState, react } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import Button from '@material-ui/core/Button';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import UseGetMxQuotation from '../hooks/UseGetMxQuotation';

const MxQuoationList = ({ oculto, setoculto, setskudetails }) => {
	const crearquotation = () => {
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
			skunumber: event,
			skudetail: data
		});

		setoculto({
			hiddenlistools: true,
			hiddenstoreform: false,
			hiddentable: false,
			hiddendetails: true
		});
	};

	const { data } = UseGetMxQuotation(idcliente);

	console.log('datos para tabla:', data);

	const columnas = [
		{
			title: 'Short Description',
			field: 'fecha_creacion'
		}
	];

	const actions = [
		{
			icon: () => <RemoveRedEyeIcon style={{ color: '#e39d3b' }} fontSize="large" />,
			tooltip: 'View Details',
			onClick: (event, rowData) => details(rowData.sku)
		}
	];

	return (
		<>
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
								<Button variant="contained" color="primary">
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
