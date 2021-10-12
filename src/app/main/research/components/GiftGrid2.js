/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { blue, red } from '@material-ui/core/colors';
import { star } from '../hooks/star';
import CustomizedDialogs from '../hooks/dialogo';
import { useFetchGifs } from '../hooks/useFetchGifs';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	table: {
		minWidth: 750,
		padding: '2px 4px'
	},

	centrar: {
		textAlign: 'center',
		direction: 'row',
		justify: 'center',
		alignItems: 'center',
		padding: theme.spacing(6)
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
	const link = `https://www.amazon.com/dp/${asin}`;
	return (
		<>
			<a href={link} target="_blank" rel="noreferrer">
				{asin}
			</a>
		</>
	);
};

export const GiftGrid2 = ({ setCategories, category }) => {
	const { data, loading } = useFetchGifs(category);
	// {loading && <p>Loading Results...</p>}
	const classes = useStyles();

	// console.log(category)

	const columnas = [
		{
			title: 'Imagen',
			field: 'url',
			render: rowData => <img src={rowData.url} style={{ width: 80 }} />
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
			title: 'Details',
			field: 'id',
			render: rowData => <CustomizedDialogs codigo={rowData.id} />
		},
		{
			title: 'Rank',
			field: 'reviews',
			render: rowData => reviews(rowData.reviews, rowData.total_reviews)
		}
	];

	return (
		<>
			<br />
			<br />
			<br />
			{loading ? (
				<Grid className={classes.centrar} item xs={12}>
					<CircularProgress color="primary" size={60} />
				</Grid>
			) : (
				<>
					<Grid className={classes.centrar} item xs={12}>
						<MaterialTable
							title=""
							columns={columnas}
							data={data}
							options={{
								selection: true
							}}
							// onSelectionChange={(event) => { event ? console.log(event[0]?.id) : null }}
							actions={[
								{
									tooltip: 'Save Selected Products',
									icon: () => <SaveIcon color="inherit" style={{ fontSize: 40 }} />,
									onClick: (evt, data) =>
										setCategories({
											keyword: category,
											hidden: false,
											hidden1: true,
											hidden2: false,
											selected: data
										})
								}
							]}
						/>
					</Grid>
				</>
			)}
		</>
	);
};

/* import react from 'react';


export default function ListResearchApp() {

    const columnas = [

        {
            title: 'KeyWord',
            field: 'Keword'
        },
        {
            title: 'Date Creation',
            field: 'date'
        },
        {
            title: 'Details',
            field: 'details'
        },

    ];

    const data = [];

    return (



        <>

            <MaterialTable

                title=""
                columns={columnas}
                data={data}
            >

            </MaterialTable>

        </>




    ); */
