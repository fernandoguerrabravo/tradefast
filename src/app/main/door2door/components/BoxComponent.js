import React from 'react';
import Select from 'react-select';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import Paper from '@material-ui/core/Paper';
import { green, red, blue } from '@material-ui/core/colors';
import { Divider, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import { BoxComponentList } from './BoxComponentList';


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

        //margin: theme.spacing(1),
        minWidth: 400,
    },
    formControl2: {

        minWidth: 25,
        padding: theme.spacing(2)
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

    paper: {

        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
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

const listabox = [];

export default function BoxComponent({ datosfinales, setdatosfinales }) {

    const idcliente = "abcdef";
    const classes = useStyles();

    const [box, setbox] = useState({

        id: '',
        qtybox: '',
        weight: '',
        width: '',
        length: '',
        height: '',
        weightbox: '',
        volbox: '',

    });

    const [arreglobox, setarreglobox] = useState({

        arreglosdebox: [],
        totalkg: '',
        totalvol: '',
        totalqty: ''

    })

    const handleqtyChange = (event) => {

        const peso = box.qtybox * box.weight;
        const vol = ((box.width * box.length * box.height) * box.qtybox) / 1000000

        setbox({

            ...box,
            [event.target.name]: event.target.value,
            id: listabox.length,
            weightbox: peso,
            volbox: vol
        })

       console.log(box)
    }

    function onKeyDown(keyEvent) {

        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
            keyEvent.preventDefault();
        }
    }


    const submitsku = () => {


        if (box.qtybox != '' && box.weightbox != '' && box.weight != '' && box.width != '' && box.length != '' && box.height != '') {

            listabox.push(box)
            let sumakg = 0;
            let sumavol = 0;
            let sumaqty = 0;
            for (const sumas of listabox) {

                sumakg = sumakg + sumas.weightbox
                sumavol = sumavol + sumas.volbox
                sumaqty = sumaqty + sumas.qtybox

            }

            
            setarreglobox({

                ...arreglobox,
                arreglosdebox: listabox,
                totalkg: sumakg,
                totalvol: sumavol,
                totalqty: sumaqty


            });

            console.log("PERRO: ", arreglobox.arreglosdebox)

            setbox({

                qtybox: '',
                weight: '',
                width: '',
                length: '',
                height: '',
                weightbox: '',
                volbox: '',
            })

            setdatosfinales((datosfinales) => {

                return {
                    ...datosfinales,
                    boxes: arreglobox
                }

            });
           

        } else {

            swal({

                title: "oops!",
                text: "Insert a valid Information!!",
                icon: "warning",
            });

        }

    }

    
    return (

        <form onKeyDown={onKeyDown} noValidate autoComplete="off">
            <br></br>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography className={classes.titles} variant="h6" gutterBottom>
                        Boxes and Packaging
                    </Typography>
                    <Divider /><br></br>
                    <Typography className={classes.titles} style={{ color: green[600] }} variant="caption" gutterBottom>
                        (2) In this section you must include each kind of master box that will be shipped in your export.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <TextField
                                id="qtybox"
                                name="qtybox"
                                label="Quantities of Box"
                                variant="outlined"
                                color="secondary"
                                type="number"
                                value={box.qtybox || ''}
                                onChange={handleqtyChange}
                            />
                            <Typography className={classes.titles} style={{ color: blue[400] }} variant="caption" gutterBottom>
                                (*) Qty. one type of box
                            </Typography>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <TextField
                                id="weight"
                                name="weight"
                                label="Weight (Kg)"
                                variant="outlined"
                                color="secondary"
                                type="number"
                                value={box.weight}
                                onChange={handleqtyChange}
                            />
                            <Typography className={classes.titles} style={{ color: blue[400] }} variant="caption" gutterBottom>
                                (*) Unit for each Box
                            </Typography>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <TextField
                                id="width"
                                name="width"
                                label="Width (cm)"
                                variant="outlined"
                                color="secondary"
                                type="number"
                                value={box.width}
                                onChange={handleqtyChange}
                            />
                            <Typography className={classes.titles} style={{ color: blue[400] }} variant="caption" gutterBottom>
                                (*) Unit for each Box
                            </Typography>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <TextField
                                id="length"
                                name="length"
                                label="Length (cm)"
                                variant="outlined"
                                color="secondary"
                                type="number"
                                value={box.length}
                                onChange={handleqtyChange}
                            />
                            <Typography className={classes.titles} style={{ color: blue[400] }} variant="caption" gutterBottom>
                                (*) Unit for each Box
                            </Typography>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <TextField
                                id="height"
                                name="height"
                                label="Height (cm)"
                                variant="outlined"
                                color="secondary"
                                type="number"
                                value={box.height}
                                onChange={handleqtyChange}
                            />
                            <Typography className={classes.titles} style={{ color: blue[400] }} variant="caption" gutterBottom>
                                (*) Unit for each Box
                            </Typography>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <Button onClick={submitsku} variant="contained" color="secondary">+ Add Item to List</Button>
                        </FormControl>
                    </Paper><br></br>
                </Grid>
                <Grid item xs={12}>
                    <BoxComponentList event={arreglobox.arreglosdebox} />
                </Grid>
            </Grid>
        </form >
    );
}













