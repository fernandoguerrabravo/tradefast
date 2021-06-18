import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RateSearch from './components/RateSearch';
import InfoRate from './components/InfoRate';
import HtsRate from './components/HtsRate';
import MarketRate from './components/MarketRate';
import InfoRateDetails from './components/InfoRateDetails';


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

  // Creo el estado del detalles de la cotizacion que se eligira , para mostrarlo 

  const [quotation, setquotation] = useState({

    id_details: '',
    hidden3: false

  });


  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InfoRate setquotation={setquotation} />
        </Grid>
        {quotation.hidden3 && <Grid item xs={12}> <Paper className={classes.paper}><InfoRateDetails id_details={quotation.id_details} /></Paper></Grid>}
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </div>
  );

};

