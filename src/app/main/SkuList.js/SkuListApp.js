import React, { useState } from 'react'
//import {  } from './components/'
//import {  } from './components/'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SkuListTable from './components/SkuListTable'
import PreviewCard from './components/SkuListDetails';


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

    const [skudetails, setskudetails] = useState(

        {
            skunumber: '',
            hidden: true

        }
    );

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {skudetails.hidden ? <SkuListTable setskudetails={setskudetails} /> : null}
                </Grid>
                <Grid item xs={6}>
                    {skudetails.hidden ? null : <PreviewCard event={skudetails} />}
                </Grid>
            </Grid>
        </>
    )
}

export default SkuListApp;