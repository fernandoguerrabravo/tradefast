import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SkuListTable from './components/SkuListTable'
import PreviewCard from './components/SkuListDetails';
import { SkuStoreFiles } from '../skustore/components/SkuStoreFiles';
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

    const [skudetails, setskudetails] = useState(

        {
            skunumber: '',
            id_cliente: 'abcdef'

        }
    );

    const [oculto, setoculto] = useState(

        {
            hidden: true,
        }
    )

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {oculto.hidden ? null : <SkuListTools setoculto={setoculto} />}
                </Grid>
                <Grid item xs={12}>
                    {oculto.hidden ? <SkuListTable setoculto={setoculto} setskudetails={setskudetails} /> : null}
                </Grid>
                <Grid item xs={8}>
                    {oculto.hidden ? null : <Paper className={classes.paper}><PreviewCard event={skudetails} /></Paper>}
                </Grid>
                <Grid item xs={12}>
                    {oculto.hidden ? null : <Paper className={classes.paper}><SkuStoreFiles skus={skudetails.skunumber} idcliente={skudetails.id_cliente}></SkuStoreFiles></Paper>}
                </Grid>
            </Grid>
        </>
    )
}

export default SkuListApp;