import react from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import useGetClasHts from '../hooks/UseGetClasHts';

export default function ListHtsTable() {
	const idcliente = 'abcdef';
	// const { data, loading } = useGetResearch(idcliente)

	const { data } = useGetClasHts(idcliente);

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
			title: 'Category Description',
			field: 'htsclas.categories.L0',
			render: rowData => (
				<>
					{rowData.htsclas.categories.L0}; {rowData.htsclas.categories.L1} ;{rowData.htsclas.categories.L2};{' '}
					{rowData.htsclas.categories.L3} ;
				</>
			)
		},
		{
			title: 'US Classification',
			field: 'htsclas.hts'
		},

		{
			title: 'General Duties',
			field: 'htsclas.duties'
		},
		{
			title: 'FTA',
			field: 'htsclas.special'
		},

		{
			title: 'Date Creation',
			field: 'htsclas.date'
		}
	];

	return (
		<>
			<MaterialTable title="" columns={columnas} data={data} />
		</>
	);
}
