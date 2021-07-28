
import React from 'react';
import Select from 'react-select';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import Paper from '@material-ui/core/Paper';
import { green, red, blue } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import { UseGetFba } from '../hooks/useGetFba';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { GetSellers } from 'app/main/helpers/GetSellers';
import { UseGetSellers } from 'app/main/hooks/useGetSellers';
import UseGetAddress from '../hooks/UseGetAddress';



const useStyles = makeStyles((theme) => ({

    root: {

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
    formControl: {
        margin: theme.spacing(2),
        minWidth: 400,
    },
    formControl2: {
        margin: theme.spacing(1),
        minWidth: 200,
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
        padding: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
    icons: {
        fontSize: "small"
    },
    table: {
        minWidth: 650,
    },
}));


export default function AddressComponent() {

    const id_cliente = "abcdef";
    const classes = useStyles();
    const fba = UseGetFba();
    const fbafinal = fba.data;
    const originalJson = fbafinal;
    const newJson = [];

    console.log('fba:', originalJson);

    // Relleno el Select con los FBA de Amazon

    for (const htsCode of originalJson) {

        {
            newJson.push({
                value: htsCode.codigo, label: htsCode.codigo + ', ' + htsCode.direccion + ', ' + htsCode.ciudad + ', ' + htsCode.estado_country
                    + ', ' + htsCode.zip
            });
        }
    }

    // Obtengo los datos del sellers



    const sellers = UseGetAddress(id_cliente);
    const sellersfinal = sellers.data;
    console.log(sellersfinal.country);

    /* const originalJson = imgs;
                 const newJson = [];
                 for (const htsCode of originalJson) {
                     if (htsCode.htsno.length > 12) {
                       newJson.push(htsCode);
                     }
                   } */
    /*function getFilteredByKey(array, key, value) {
        return array.filter(function(e) {
          return e[key] == value;
        });
      } */

    /*for (const Country of Object.entries(sellersfinal) {
        console.log("PICO:", Country);
    } */

    /*  const newJson2 = [];
      for (const direccion of sellersfinal) {
          if (direccion.type == "exw") {
              newJson2.push(direccion);
          }
      } */

    /* console.log("filtrado:", originalJson2) */


    /* function onKeyDown(keyEvent) {
     
        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
            keyEvent.preventDefault();
        }
    } */



    /* const handleSubmit = (e) => {
     
         e.preventDefault();
         if (datos.hts.trim().length > 3 && datos.country.trim() != '') {
     
             setencabezado({
     
                 ...datos,
                 destination: 'United States',
                 hidden: true,
                 hidden3: false,
     
             })
     
             setDatos({
                 country: '',
                 hts: '',
                 destination: 'United States',
     
             });
         } else {
     
             swal({
                 title: "oops!",
                 text: "Insert a valid Information or Country !!",
                 icon: "warning",
             });
     
         }
     
     } */

    return (

        <form noValidate autoComplete="off">
            <Typography className={classes.titles} variant="h5">
                Locations
            </Typography> <br></br>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.titles} variant="subtitle1" gutterBottom>
                            <strong>Pickup Address</strong>
                        </Typography>
                        <Typography className={classes.titles} variant="subtitle2" gutterBottom >
                            {sellersfinal.number}  {sellersfinal.address_1}, {sellersfinal.neighborhood}. {sellersfinal.state}, {sellersfinal.zip_code}, {sellersfinal.country} &nbsp;&nbsp;<Tooltip title="Seller's Pickup Address"><InfoIcon style={{ color: green[500] }} className={classes.icon} /></Tooltip></Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.titles} variant="subtitle1" gutterBottom>
                            <strong>Destination Address (FBA Address)</strong>
                        </Typography>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select options={newJson} />
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </form>


    );
}













