import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { green, red, blue } from '@material-ui/core/colors';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import UseFetchClas from '../hooks/UseFetchClas';

const useStyles = makeStyles({
	table: {
		minWidth: 750
	},
	centrar: {
		textAlign: 'center',
		direction: 'row',
		justify: 'center',
		alignItems: 'center'
	}
});

const HtsGrid2 = ({ encabezado, setencabezado }) => {
	// const { data, loading, finales } = UseFetchHts(encabezado.hts)

	const { data, loading, finales } = UseFetchClas(encabezado.hts);

	// const { categorias } = UseFetchHtsCategory(encabezado.hts);
	// {loading && <p>Loading Results...</p>}

	const detailhts = (e, f, g, h, i) => {
		setencabezado({
			...encabezado,
			hidden1: true,
			hidden: false,
			hts: e,
			hts8: e,
			general: f,
			special: g,
			duties: h,
			dutiespecific: i
		});
	};

	const classes = useStyles();

	const columnas = [
		{
			title: 'HTS Number',
			field: 'htsno'
		},
		{
			title: 'Brief Description',
			field: 'description'
		}
	];

	const actions = [
		{
			icon: () => <SaveOutlinedIcon color="primary" fontSize="large" />,
			tooltip: 'Select HTS Number',
			onClick: (event, rowData) =>
				detailhts(rowData.htsno, rowData.general, rowData.special, rowData.duties, rowData.dutiespecific)
		}
	];

	return (
		<>
			<Grid item xs={12}>
				<Paper>
					<MaterialTable
						title="Select Suggest HTS"
						columns={columnas}
						data={data}
						actions={actions}
						options={{
							actionsColumnIndex: -1
						}}
					/>
				</Paper>
			</Grid>{' '}
		</>
	);
};

export default HtsGrid2;
