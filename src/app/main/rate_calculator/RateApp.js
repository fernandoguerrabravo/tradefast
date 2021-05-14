import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RateSearch from './components/RateSearch';
import Fedex from './components/fedex';
import UPS from './components/ups';
import DHL from './components/dhl';
import ECL from './components/ecl'
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

export default function RateApp() {

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
          <Paper className={classes.paper}><RateSearch></RateSearch></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Fedex /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><UPS /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><DHL /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><ECL /></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
       </Grid>
    </div>
  );
  
}