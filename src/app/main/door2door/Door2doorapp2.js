import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddressComponent from './components/AddressComponent';
import SkuComponent from './components/SkuComponent';
import BoxComponent from './components/BoxComponent';
import CalculosFinales from './components/CalculosFinales';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({

    root: {

        flexGrow: 1,
    },

    paper: {

        padding: theme.spacing(2),
        color: theme.palette.text.secondary,

    },

}));

export default function Door2doorApp() {

    const classes = useStyles();

    const [datosfinales, setdatosfinales] = useState({

        boxes: [],
        skus: [],
        hidden: false

    })

    const incrementCount = () => {

        setdatosfinales((datosfinales) => {
            return { ...datosfinales, hidden: true }
        });
    }

    const mostrar = () => {

        incrementCount()

    }


    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><AddressComponent /></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><SkuComponent datosfinales={datosfinales} setdatosfinales={setdatosfinales} /></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><BoxComponent datosfinales={datosfinales} setdatosfinales={setdatosfinales} /></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Button onClick={mostrar} variant="contained" color="primary">Show Quotation</Button></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>{datosfinales.hidden && <CalculosFinales datosfinales={datosfinales} />}</Paper>
                </Grid>
            </Grid>
        </div>
    );

};

