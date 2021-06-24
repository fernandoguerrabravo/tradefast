import React, { useState } from 'react'
//import {  } from './components/'
//import {  } from './components/'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SkuListTable from './components/SkuListTable'
import { SkuListTools } from './components/SkuListTools';


export const SkuListApp = () => {

    const useStyles = makeStyles((theme) => ({

        root: {

            flexGrow: 1,
        },

        paper: {

            padding: theme.spacing(1),
            color: theme.palette.text.secondary,

        },

    }));

    const classes = useStyles();

    const [categories, setCategories] = useState(

        {
            sku: '',
            keyword: '',
            hidden: false

        }
    );

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <SkuListTools ></SkuListTools>
                </Grid>
                <Grid item xs={12}>
                    <SkuListTable></SkuListTable>
                </Grid>
            </Grid>
        </>
    )
}

export default SkuListApp;