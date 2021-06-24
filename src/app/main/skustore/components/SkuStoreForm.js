import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import { green, red, blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Select from 'react-select';
import { UseGetCountry } from '../hooks/useGetCountry';
import { SaveSku } from '../helpers/SaveSku';
//import { useGetSkuHts } from '../hooks/useGetSkuHts';
import swal from 'sweetalert';

const styles = (theme) => ({

    root: {
        margin: 0,
        padding: theme.spacing(1),
    },

});

const styles2 = makeStyles((theme) => ({

    icons: {

        fontSize: "small",
        backgroundColor: red[500],
        color: red[500]
    },

    formControl2: {

        minWidth: 280,
        padding: theme.spacing(1)
    },

    formControl1: {

        minWidth: 500,
        padding: theme.spacing(1)
    },


}));


export default function SkuStoreForm() {

    const classes2 = styles2();
    const [guardarsku, setguardarsku] = useState({

        id_cliente: 'abcedef',
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

    const Save = () => {

        if (guardarsku.sku != '' && guardarsku.shortdescription != '' && guardarsku.country_origin != '') {

            SaveSku(guardarsku)

        } else {

            swal({
                title: "oops!",
                text: "Insert a valid Information!!",
                icon: "warning",
            });

        }



        //history.push('/htstaxlist')


    };

    const country = UseGetCountry();
    const countryfinal = country.data;

    const newJson1 = [];
    for (const pais of countryfinal) {
        {
            newJson1.push({
                value: pais.Code, label: pais.Name
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
    const buscarhts = () => {

        sethidden({ escondido: true })
        useclas({ datos: guardarsku.shortdescription })
        console.log("eeeeeee", guardarsku.shortdescription)
    }

    return (

        <div>
            <FormControl className={classes2.formControl2} variant="outlined">
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
                <Typography style={{ color: '#F5981E' }} variant="caption" gutterBottom>
                    <strong>Input Your SKU Code</strong>
                </Typography>
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
                <Typography style={{ color: '#F5981E' }} variant="caption" gutterBottom>
                    <strong>Input UPC Code (Optional)</strong>
                </Typography>
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
                />
                <Typography style={{ color: '#F5981E' }} variant="caption" gutterBottom>
                    <strong>Unit FOB Value</strong>
                </Typography>
            </FormControl>
            <FormControl className={classes2.formControl2} variant="outlined">
                <InputLabel shrink><strong>Country Origin</strong></InputLabel>
                <Select
                    id="country_origin"
                    name="country_origin"
                    options={newJson1}
                    onChange={SelectChange}
                />
                <Typography style={{ color: '#F5981E' }} variant="caption" gutterBottom>
                    <strong>Select Country Origin</strong>
                </Typography>
            </FormControl>
            <FormControl className={classes2.formControl1} variant="outlined">
                <TextField
                    id="shortdescription"
                    name="shortdescription"
                    //label="Display Name (Short Description)"
                    variant="outlined"
                    color="primary"
                    type="text"
                    value={guardarsku.shortdescription}
                    onChange={handlingChange}
                />
                <Typography style={{ color: '#F5981E' }} variant="caption" gutterBottom>
                    <strong>Input the Best Description</strong>
                </Typography>
            </FormControl>
            <Button onClick={Save}>GUARDAR </Button>
        </div >
    );
}