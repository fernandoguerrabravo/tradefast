import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { green, red, blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Select from 'react-select';
import { UseGetCountry } from '../hooks/useGetCountry';
import { SaveSku } from 'app/main/skustore/helpers/SaveSku';
import Paper from '@material-ui/core/Paper';
import Swal from 'sweetalert2';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';


const styles2 = makeStyles((theme) => ({

    root: {
        margin: 0,
        padding: theme.spacing(1),
    },

    icons: {

        fontSize: "small",
        backgroundColor: red[500],
        color: red[500]
    },

    formControl2: {


        minWidth: 450,
        padding: theme.spacing(1)
    },

    formControl1: {

        minWidth: 450,
        padding: theme.spacing(1)
    },

    paper: {

        padding: theme.spacing(1),
        //textAlign: 'center',
        color: theme.palette.text.primary,

    },


}));



export default function ModalSku({ setescondido }) {


    const classes2 = styles2();

    const [open, setOpen] = React.useState(false);

    const [guardarsku, setguardarsku] = useState({

        id_cliente: 'abcdef',
        sku: '',
        shortdescription: '',
        fob: '',
        country_origin: '',
        upc_number: ''

    })

    const handlingChange = (event) => {

        setguardarsku({

            ...guardarsku,
            [event.target.name]: event.target.value

        })
        console.log(guardarsku)

    }

    const SelectChange = (event) => {

        setguardarsku({

            ...guardarsku,
            country_origin: event.value

        })
        console.log(guardarsku)

    }

    const volver = () => {

        setescondido({ escondido: true });

    }

    const handleClose = async () => {


        if (guardarsku.fob != '' && guardarsku.sku != '' && guardarsku.shortdescription != '' && guardarsku.country_origin != '') {

            SaveSku(guardarsku)
                .then(await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                }))

            setescondido({ escondido: true });

        } else {

            Swal.fire({

                title: "oops!",
                text: "Please complete all fields!!",
                icon: "warning",

            });

        }
    };

    const country = UseGetCountry();
    const countryfinal = country.data;

    const newJson1 = [];
    for (const pais of countryfinal) {
        {
            newJson1.push({
                value: pais.Name, label: pais.Name
            });
        }
    }

    const [hidden, sethidden] = useState(

        {
            escondido: false
        }
    )
    const [clas, useclas] = useState(
        {
            datos: ''
        }
    )


    return (

        <div>
            <Paper className={classes2.paper}>
                <img src='https://fotos-ecl.s3.amazonaws.com/icons8-esca%CC%81ner-de-co%CC%81digo-de-barras-2-filled-100.png' width='60' height='60' />
                <Tooltip title="Back"><img onClick={volver} src='https://fotos-ecl.s3.amazonaws.com/icons8-izquierda-ci%CC%81rculo-64.png' width='40' height='40' /></Tooltip>
                Create New Product
                <FormControl variant="outlined" className={classes2.formControl2} variant="outlined">
                    <TextField
                        id="sku"
                        name="sku"
                        label="Product Code (SKU)"
                        variant="outlined"
                        color="primary"
                        type="text"
                        value={guardarsku.sku}
                        onChange={handlingChange}
                    />

                </FormControl>
                <FormControl className={classes2.formControl2} variant="outlined">
                    <TextField
                        id="upc_number"
                        name="upc_number"
                        label="UPC Number"
                        variant="outlined"
                        color="primary"
                        type="number"
                        value={guardarsku.upc_number}
                        onChange={handlingChange}
                    />
                </FormControl>
                <FormControl className={classes2.formControl2} variant="outlined">
                    <TextField
                        id="fob"
                        name="fob"
                        label="FOB Value"
                        variant="outlined"
                        color="primary"
                        type="number"
                        value={guardarsku.fob}
                        onChange={handlingChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">US$</InputAdornment>,
                        }}
                    /><br></br>
                </FormControl>
                <FormControl className={classes2.formControl2} variant="outlined">
                    <InputLabel shrink><strong>Country Origin</strong></InputLabel>
                    <Select
                        id="country_origin"
                        name="country_origin"
                        options={newJson1}
                        onChange={SelectChange}
                    /><br></br>
                </FormControl>
                <FormControl className={classes2.formControl1} variant="outlined">
                    <TextField
                        id="shortdescription"
                        name="shortdescription"
                        label="Display Name (Short Description)"
                        variant="outlined"
                        color="primary"
                        type="text"
                        value={guardarsku.shortdescription}
                        onChange={handlingChange}
                    />
                </FormControl >
                <FormControl className={classes2.formControl2} variant="outlined">
                    <Button variant="contained" color="primary" autoFocus onClick={handleClose} color="primary">
                        Save Information
                    </Button>
                </FormControl>
            </Paper>
        </div >
    );
}