import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import UseGetRatesBrLcl from '../hooks/UseGetRatesBrLcl';
import UseGetCustomsusa from '../hooks/UseGetCustomusa';
import UseGetLastmileibc from '../hooks/UseGetLastmileibc';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export default function Resumen({sethidden, datosfinales }) {
   
   
    const classes = useStyles();

    const mostrar = () => {

        console.log("PARA CALCULAR: ", datosfinales)
    
      }

      const lclrate = UseGetRatesBrLcl(datosfinales);
      const lclratefinal = lclrate.data;

      const customusa = UseGetCustomsusa(datosfinales);
      const customusafinal = customusa.data;

      const lastmileibc = UseGetLastmileibc(datosfinales);
      const lastmileibcfinal = lastmileibc.data;

      console.log("ultima milla ibc ", lastmileibcfinal);


      /* export_rate_brazil: 316.92775
      international_freight: 6.237
      total_first_mile_brazil: 15.05808144
      total_local_cost: 331.47513812154693 
      */
      
    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Button onClick={mostrar} variant="contained" color="primary">Show Quotation</Button>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        {lclratefinal.total_lcl_brazil}<br></br>
                        {customusafinal.total_clareance_usa}<br></br>
                        {lastmileibcfinal.lastmile_total}
                       
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </div>
    );
}