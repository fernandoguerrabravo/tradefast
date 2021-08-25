import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddressComponent from './components/AddressComponent';
import SkuComponent from './components/SkuComponent';
import BoxComponent from './components/BoxComponent';
import CalculosFinales from './components/CalculosFinales';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import swal from 'sweetalert';
import { green, red, blue } from '@material-ui/core/colors';
import { Divider, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import { UseGetSku } from './hooks/useGetSku';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ModalSku from './components/ModalSku';
import { SkuComponentList } from './components/SkuComponentList';


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
 
  const [hidden , sethidden] = useState({

    hiddenlocation: true,
    hiddensku : false,
    hiddenbox: false,
    hiddenfinal : false

  })


  const mostrar = () => {

    
    console.log("PARA CALCULAR: ", datosfinales)


  }


  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         { hidden.hiddenlocation ?  <Paper className={classes.paper}><AddressComponent sethidden = {sethidden} datosfinales={datosfinales} setdatosfinales={setdatosfinales} /></Paper> : null}
        </Grid>
        <Grid item xs={12}>
        { hidden.hiddensku ?  <Paper className={classes.paper}><SkuComponent datosfinales={datosfinales} setdatosfinales={setdatosfinales} /></Paper> : null } 
        </Grid>
        <Grid item xs={12}>
        { hidden.hiddenbox ?  <Paper className={classes.paper}><BoxComponent datosfinales={datosfinales} setdatosfinales={setdatosfinales} /></Paper> : null }  
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Button onClick={mostrar} variant="contained" color="primary">Show Quotation</Button></Paper>
        </Grid>
        <Grid item xs={12}>
         {hidden.hiddenfinal ? <Paper className={classes.paper}> <CalculosFinales datosfinales={datosfinales} /></Paper> : null }
        </Grid>
      </Grid>
    </div>
  );

};

