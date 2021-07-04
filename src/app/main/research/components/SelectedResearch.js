import React, { useState } from 'react';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { star } from '../hooks/star';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Avatar } from '@material-ui/core';
import Select from 'react-select';
import FormControl from '@material-ui/core/FormControl';
import { UseGetSku } from 'app/main/door2door/hooks/useGetSku';
import { green, red, blue } from '@material-ui/core/colors';
import ModalSku from 'app/main/door2door/components/ModalSku';
import CardMedia from '@material-ui/core/CardMedia';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({

    root: {

        flexGrow: 1,
    },

    table: {

        minWidth: 750,
        padding: theme.spacing(2),

    },

    paper: {

        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,

    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 400,
    },
    formControl2: {
        margin: theme.spacing(1),
        minWidth: 300,
        padding: theme.spacing(1)
    },
    media: {

        height: 0,
        paddingTop: '56.25%', // 16:9
    },

}));



const reviews = (info, info2) => {


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                Total Reviews: {info2} <br></br>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {info}
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

export const SelectedResearch = ({ selected }) => {

    const idcliente = "abcdef";
    const sku = UseGetSku(idcliente);
    const skufinal = sku.data;
    const newJson1 = [];
    for (const codigo of skufinal) {
        {
            newJson1.push({
                value: codigo.sku, label: codigo.sku
            });
        }
    }

    const handleInputChange = (event) => {

        return '';
    }

    var precios = [];
    var suma = 0;
    for (const datitos of selected) {

        suma = suma + parseFloat(datitos.price)
        precios.push(parseFloat(datitos.price))

    };

    var average = suma / (selected.length)
    const max = Math.max.apply(Math, precios);
    const min = Math.min.apply(Math, precios);
    // console.log("PRECIOS SELECTED", min);


    const columnas = [

        {
            title: 'Imagen',
            field: 'url',
            render: rowData =>

                <img src={rowData.url} style={{ width: 80 }} />

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
            title: '',
            field: 'id',



        },
        {
            title: '',
            field: 'reviews',
            render: rowData =>

                reviews(rowData.reviews, rowData.total_reviews)

        },



    ]

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (

        <>
            <Grid container spacing={3}>

                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.root} src="https://fotos-ecl.s3.amazonaws.com/icons8-precio-bajo-48.png" />
                        <Typography color="primary" variant="h6">Min Price</Typography><br></br>
                        <Typography color="secondary" variant="h5">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(min)}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.root} src="https://fotos-ecl.s3.amazonaws.com/icons8-flujo-de-fondos-48.png" />
                        <Typography color="primary" variant="h6">Average Price</Typography><br></br>
                        <Typography color="secondary" variant="h5">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(average)}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.root} src="https://fotos-ecl.s3.amazonaws.com/icons8-etiqueta-de-precio-usd-48.png" />
                        <Typography color="primary" variant="h6">Max Price</Typography><br></br>
                        <Typography color="secondary" variant="h5">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(max)}
                        </Typography>
                    </Paper>
                </Grid>


                <Grid item xs={6}>

                    <Paper className={classes.paper}>

                        <Grid container >

                            <Grid item xs={3}>
                                <CardMedia
                                    className={classes.media}
                                    image="https://fotos-ecl.s3.amazonaws.com/icons8-co%CC%81digo-de-barras-80.png"
                                    title="Paella dish"
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <FormControl variant="outlined" className={classes.formControl2}>
                                    <Typography className={classes.titles} variant="subtitle1" gutterBottom>
                                        <ModalSku></ModalSku>
                                    </Typography>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                             
                            </Grid>

                        </Grid>



                        <FormControl variant="outlined" className={classes.formControl2}>
                            <Select
                                options={newJson1}
                                onChange={handleInputChange}
                            /><b></b>
                            <Typography className={classes.titles} style={{ color: red[400] }} variant="caption" gutterBottom>
                                <strong>Search Your Saved SKU Code</strong>
                            </Typography>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <Button>Save and Finish</Button>
                        </FormControl>

                    </Paper>
                </Grid><br></br>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <MaterialTable style={{ zIndex: 0 }} className={classes.table}

                            columns={columnas}
                            data={selected}
                        >
                        </MaterialTable>
                    </Paper>
                </Grid>


            </Grid >
        </>

    );
}