import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddressComponent from './components/AddressComponent';
import SkuComponent from './components/SkuComponent';
import BoxComponent from './components/BoxComponent';
import CalculosFinales from './components/CalculosFinales';
import Button from '@material-ui/core/Button';
import { deepOrange, green, red, blue } from '@material-ui/core/colors';
import { SkuComponentList } from './components/SkuComponentList';
import Resumen from './components/ResumenComponent';
import Avatar from '@material-ui/core/Avatar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

  square: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    width: theme.spacing(7),
    height: theme.spacing(7)
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
    pallets: [],
    tipobulto: ''
    // el tipo de bulto puede ser 'p' -> pallet  o 'b' -> box


  })

  const [hidden, sethidden] = useState({


    hiddenlocation: true,
    hiddensku: true,
    hiddenbox: false,
    hiddenfinal: false

  })


  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* hidden.hiddenlocation ? <Paper className={classes.paper}><AddressComponent sethidden={sethidden} datosfinales={datosfinales} setdatosfinales={setdatosfinales} /></Paper> : null */}
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>

            <img src="https://fotos-ecl.s3.amazonaws.com/icons8-pallets-512.png" width='90' height='90' alt="Italian Trulli" />
            <img src="https://fotos-ecl.s3.amazonaws.com/icons8-plataforma-500.png" width='90' height='90' alt="Italian" />
            <FormControl component="fieldset">
              <FormLabel component="legend">Packaging</FormLabel>
              <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel value="b" control={<Radio />} label="Boxes" />
                <FormControlLabel value="p" control={<Radio />} label="Pallets" />
              </RadioGroup>
            </FormControl>

          </Paper>
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

