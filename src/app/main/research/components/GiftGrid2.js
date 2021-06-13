
import React from 'react'
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import { useFetchGifs } from '../hooks/useFetchGifs';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { star } from '../hooks/star';
import CustomizedDialogs from '../hooks/dialogo';


const useStyles = makeStyles({
    table: {
        minWidth: 750,
    },
    centrar: {

        textAlign: 'center',
        direction: "row",
        justify: "center",
        alignItems: "center"
    }
});

const reviews = (info) => {

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {info} <br></br>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                {star(info)}
            </div>

        </>
    )
};

const link = (asin) => {

    const link = `https://www.amazon.com/dp/${asin}`;
    return (

        <>
            <a href={link} target="_blank">{asin}</a>
        </>

    )
}

export const GiftGrid2 = ({ category, sku }) => {

    const { data, loading } = useFetchGifs(category, sku)
    //{loading && <p>Loading Results...</p>}
    const classes = useStyles();

    console.log(category)

    const columnas = [

        {
            title: 'Imagen',
            field: 'url',
            render: rowData =>

                <img src={rowData.url} style={{ width: 150, borderRadius: '50%' }} />

        },

        {
            title: 'ASIN',
            field: 'id',
            render: rowData => link(rowData.id)

        },

        {
            title: 'Description',
            field: 'title',


        },
        {
            title: 'Price',
            field: 'price',


        },

        {
            title: 'Details',
            field: 'id',
            render: rowData => <CustomizedDialogs codigo={rowData.id} />


        },
        {
            title: 'Rank',
            field: 'reviews',
            render: rowData =>

                reviews(rowData.reviews)

        },

    ]

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            { loading ? <Grid className={classes.centrar} item xs={12}><CircularProgress color="primary" size={60} /></Grid> :
                <>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center" item xs={12}><Button variant="contained" color="primary">Save Your Search</Button>
                    </Grid>
                    <Grid className={classes.centrar} item xs={12}>
                        <MaterialTable

                            title=""
                            columns={columnas}
                            data={data}
                        >

                        </MaterialTable>
                    </Grid>
                </>
            }
        </>
    )
}


/*import react from 'react';


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


