import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchTax from './components/HtsSearch';
import HtsHeader from './components/HtsHeader';


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

export default function FullWidthGrid() {

  const classes = useStyles();

  const [encabezado, setencabezado] = useState([
    {
      country: '',
      hts: '',
      hidden: false,
      destination: ''

    }

  ]);

  const [htscode, sethtscode] = useState([

    {
      htscodedatos: [],
    }

  ]);

  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><SearchTax setencabezado={setencabezado}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><HtsHeader event={encabezado}/></Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </div>
  );
  
}