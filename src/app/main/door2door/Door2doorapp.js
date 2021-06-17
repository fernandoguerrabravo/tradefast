import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddressComponent from './components/AddressComponent';
import SkuComponent from './components/SkuComponent';


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




  // Creo el estado del detalles de la cotizacion que se eligira , para mostrarlo 


  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><AddressComponent /></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><SkuComponent /></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </div>
  );

};

