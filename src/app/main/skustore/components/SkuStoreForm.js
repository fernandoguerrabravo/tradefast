import React, { useEffect, useState } from 'react';
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
import swal from 'sweetalert';
import { Divider, Grid } from '@material-ui/core';
import { SkuStoreFiles } from './SkuStoreFiles';
import SaveIcon from '@material-ui/icons/Save';
import Swal from 'sweetalert2';
import Paper from '@material-ui/core/Paper';


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

        minWidth: 200,
        padding: theme.spacing(1)
    },

    formControl1: {

        minWidth: 100,
        padding: theme.spacing(2)
    },
    button: {

        leftmargin: 200,
        padding: theme.spacing(1),
        textAlign: 'right',
    },

    paper: {

        padding: theme.spacing(1),
        color: theme.palette.text.secondary,

    },


}));


export default function SkuStoreForm() {

    const classes2 = styles2();
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

    const Save = async () => {

        if (guardarsku.sku != '' && guardarsku.shortdescription != '' && guardarsku.country_origin != '') {

            SaveSku(guardarsku)
                .then(await Swal.fire({

                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500

                })).then((result) => { window.location.replace('/skulist') })

        } else {

            Swal.fire({

                title: "oops!",
                text: "Please complete all fields!!",
                icon: "warning",

            });

        }


        //history.push('/htstaxlist')

    }

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
    const buscarhts = () => {

        sethidden({ escondido: true })
        useclas({ datos: guardarsku.shortdescription })
        console.log("eeeeeee", guardarsku.shortdescription)
    }

    return (

        <div>

            <Grid container>

                <Grid item xs={8}>
                    <Typography className={classes2.formControl1} style={{ color: '#F5981E' }} gutterBottom>
                        <strong>Basic Information</strong>
                    </Typography>

                </Grid>
                <Grid item xs={4}>
                    <Typography style={{ textAlign: 'right' }} className={classes2.formControl1} gutterBottom>
                        <Button onClick={Save} startIcon={<SaveIcon />} size="small" variant="contained" color="primary">Save Product</Button>
                    </Typography>

                </Grid>

                <Grid item xs={12}>
                    <Divider></Divider><br></br>
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
                        <Typography style={{ color: blue[800] }} variant="caption" gutterBottom>
                            Input Your SKU Code
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
                        <Typography style={{ color: blue[800] }} variant="caption" gutterBottom>
                            Input UPC Code (Optional)
                        </Typography>
                    </FormControl><br></br>
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
                        <Typography style={{ color: blue[800] }} variant="caption" gutterBottom>
                            Unit FOB Value
                        </Typography>
                    </FormControl>
                    <FormControl className={classes2.formControl2} variant="outlined">
                        <TextField
                            id="shortdescription"
                            name="shortdescription"
                            label="Short Description"
                            variant="outlined"
                            color="primary"
                            type="text"
                            value={guardarsku.shortdescription}
                            onChange={handlingChange}
                        />
                        <Typography style={{ color: blue[800] }} variant="caption" gutterBottom>
                            Input the Best Description
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
                        <Typography style={{ color: blue[800] }} variant="caption" gutterBottom>
                            Select Country Origin
                        </Typography>
                    </FormControl>
                </Grid><br></br>
                <Grid item xs={12}>
                    <Divider></Divider><br></br>
                    <SkuStoreFiles skus={guardarsku.sku} idcliente={guardarsku.id_cliente}></SkuStoreFiles>
                </Grid>
            </Grid>

        </div >
    );
}