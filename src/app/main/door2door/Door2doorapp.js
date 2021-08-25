import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddressComponent from './components/AddressComponent';
import SkuComponent from './components/SkuComponent';
import BoxComponent from './components/BoxComponent';
import CalculosFinales from './components/CalculosFinales';
import Button from '@material-ui/core/Button';
import { green, red, blue } from '@material-ui/core/colors';
import { SkuComponentList } from './components/SkuComponentList';
import Resumen from './components/ResumenComponent';


const useStyles = makeStyles((theme) => ({

  root: {

    flexGrow: 1,
    flexGrow: 1,
    display: 'flex-grow',
    alignItems: 'center',
    width: '100%',
    margin: theme.spacing(0),
    padding: theme.spacing(1),
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },

  },
  paper: {

    padding: theme.spacing(2),
    color: theme.palette.text.secondary,

  },
  formControl2: {
    margin: theme.spacing(1),
    minWidth: 300,
    padding: theme.spacing(1)
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  titles: {

    alignItems: 'left',
    flexGrow: 1,
    display: 'flex-grow',
    textAlign: 'left',
    padding: theme.spacing(1)
  },
  icons: {

    fontSize: "small",
    backgroundColor: red[500],
    color: red[500]
  },

  table: {

    minWidth: 200,
  },

}));


export default function Door2doorApp() {

  const classes = useStyles();

  const [datosfinales, setdatosfinales] = useState({

    zip_origen: '',
    ciudad_origen: '',
    pais_origen: '',
    zip_destino: '',
    boxes: [],
    skus: [],
  })

  const [hidden, sethidden] = useState({


    hiddenlocation: true,
    hiddensku: false,
    hiddenbox: false,
    hiddenfinal: false

  })


  


  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {hidden.hiddenlocation ? <Paper className={classes.paper}><AddressComponent sethidden={sethidden} datosfinales={datosfinales} setdatosfinales={setdatosfinales} /></Paper> : null}
        </Grid>
        <Grid item xs={12}>
          {hidden.hiddensku ? <Paper className={classes.paper}><SkuComponent sethidden={sethidden} datosfinales={datosfinales} setdatosfinales={setdatosfinales} /></Paper> : null}
        </Grid>
        <Grid item xs={12}>
          {hidden.hiddenbox ? <Paper className={classes.paper}><BoxComponent sethidden={sethidden} datosfinales={datosfinales} setdatosfinales={setdatosfinales} /></Paper> : null}
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}> <Resumen sethidden={sethidden} datosfinales={datosfinales} /></Paper> 
        </Grid>
        <Grid item xs={12}>
          {hidden.hiddenfinal ? <Paper className={classes.paper}> <CalculosFinales sethidden={sethidden} datosfinales={datosfinales} /></Paper> : null}
        </Grid>
      </Grid>
    </div>
  );

};

