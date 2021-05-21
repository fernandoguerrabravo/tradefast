import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {ListResearchTools} from './components/ListResearchTools'
import DataTable from './components/ListResearchTable';


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'right',
        color: theme.palette.text.secondary,

    },

}));

export default function ListResearchApp() {

    const classes = useStyles();

    const [encabezado, setencabezado] = useState([
        {
            country: '',
            hts: '',
            hidden: false,
            destination: ''

        }

    ]);


    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><ListResearchTools></ListResearchTools></Paper>
                </Grid>
                <Grid item xs={12}>
                    <DataTable></DataTable>
                </Grid>
            </Grid>
        </div>
    );

}

//{encabezado.hidden && <HtsGrid encabezado = {encabezado}/>}