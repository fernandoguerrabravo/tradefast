
import React from 'react';
import Select from 'react-select';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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


export default function AddressComponent({datosfinales, setdatosfinales}) {

    const id_cliente = "abcdef";
    const classes = useStyles();
    const fba = UseGetFba();
    const fbafinal = fba.data;
    const originalJson = fbafinal;
    const newJson = [];

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
      
    } */

    /*  const newJson2 = [];
      for (const direccion of sellersfinal) {
          if (direccion.type == "exw") {
              newJson2.push(direccion);
          }
      } */

  

      const [address, setaddress] = useState({

        zip_origen: '',
        ciudad_origen:'',
        pais_origen: '',
        zip_destino : '',

    });

    const handleInputChange = (event) => {
        // console.log(event.target.name)
         console.log(event.value)
        
       setaddress({

           ...address,
            zip_destino : event.value,
            zip_origen  : sellersfinal.zipCode,
            ciudad_origen: sellersfinal.ciudad,
            pais_origen: sellersfinal.country,

        }) 
 console.log("direcciones: ",address);
    }

   
    /* function onKeyDown(keyEvent) {
     
        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
            keyEvent.preventDefault();
        }
    } */



    const handleSubmit = (e) => {
     
         e.preventDefault();
     
             setdatosfinales({
     
                 ...datosfinales,
                 ...address
     
             })
     
         
         /* else {
     
             swal({
                 title: "oops!",
                 text: "Insert a valid Information or Country !!",
                 icon: "warning",
             }); */
     
         }
     
      

    return (

        <form noValidate autoComplete="off">
            <Button onClick={handleSubmit} variant="contained" color="primary" >Next</Button>
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
                            {sellersfinal.number}  {sellersfinal.address_1}, {sellersfinal.neighborhood}, {sellersfinal.ciudad}, {sellersfinal.estado}, {sellersfinal.zipCode}, {sellersfinal.country} &nbsp;&nbsp;<Tooltip title="Seller's Pickup Address"><InfoIcon style={{ color: green[500] }} className={classes.icon} /></Tooltip></Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.titles} variant="subtitle1" gutterBottom>
                            <strong>Destination Address (FBA Address)</strong>
                        </Typography>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select 
                            options={newJson} 
                            onChange={handleInputChange}
                            />
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </form>


    );
}













