import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchTax from './components/HtsSearch';
import  { HtsGrid }   from './components/HtsGrid';


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


  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}><SearchTax setencabezado={setencabezado}/></Paper>
      </Grid>
          {encabezado.hidden && <HtsGrid encabezado = {encabezado}/>}
      </Grid>
        
     
    </div>
  );
  
}
