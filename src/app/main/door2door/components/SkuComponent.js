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
import { UseGetSku } from '../hooks/useGetSku';
import { SkuComponentList } from './SkuComponentList'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ModalSku from './ModalSku';


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
        margin: theme.spacing(1),
        minWidth: 400,
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

const lista = [];

export default function SkuComponent({ setencabezado }) {

    const idcliente = "abcdef";
    const classes = useStyles();
    const sku = UseGetSku(idcliente);
    const skufinal = sku.data;

    const [skus, setskus] = useState({

        id: '',
        sku: '',
        fob: '',
        shortdescription: '',
        hts8: '',
        duties: '',
        htsdescription: '',
        qty: ''

    });

    const [arregloskus, setarregloskus] = useState({

        arreglosdelsku: [],
        totalsku: '',
        totalfob: '',
        totalduties: '',
        totalotherduties: ''


    })

    const handleqtyChange = (event) => {

        setskus({

            ...skus,
            [event.target.name]: event.target.value
        })
    }

    function onKeyDown(keyEvent) {

        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
            keyEvent.preventDefault();
        }
    }

    const handleInputChange = (event) => {


        const id = lista.length
        for (const valores of skufinal) {

            if (valores.sku == event.value) {

                setskus({

                    idlista: id,
                    fob: valores.fob,
                    shortdescription: valores.shortdescription,
                    sku: event.value,
                    hts8: valores.hts8,
                    duties: valores.duties,
                    htsdescription: valores.htsdescription,
                    qty: ''

                })

            }
        }

    }

    const submitsku = () => {

        if (skus.qty != '' && skus.sku != '') {

            lista.push(skus)
            let sumadefob = 0;
            for (const sumafob of lista) {

                sumadefob = sumadefob + (sumafob.fob) * (sumafob.qty)

            }
            setarregloskus({

                arreglosdelsku: lista,
                totalsku: lista.length,
                totalfob: sumadefob

            });

            setskus({
                qty: '',
                sku: '',
            })

        } else {

            swal({

                title: "oops!",
                text: "Insert a valid Quantity and SKU Code!!",
                icon: "warning",
            });

        }

    }



    const newJson1 = [];
    for (const codigo of skufinal) {
        {
            newJson1.push({
                value: codigo.sku, label: codigo.sku
            });
        }
    }

    return (

        <form onKeyDown={onKeyDown} noValidate autoComplete="off">
            <br></br>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography className={classes.titles} variant="h6" gutterBottom>
                        SKU to Export
                    </Typography>
                    <Divider />
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <Typography className={classes.titles} variant="subtitle1" gutterBottom>
                                <ModalSku />
                            </Typography>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <Select
                                options={newJson1}
                                onChange={handleInputChange}
                                value={skus.sku}
                            /><b></b>
                            <Typography className={classes.titles} style={{ color: red[400] }} variant="caption" gutterBottom>
                                <strong>Search Your Saved SKU Code</strong>
                            </Typography>
                        </FormControl>
                    </Paper><br></br>
                    <Paper className={classes.paper}>
                        <Typography style={{ color: blue[900] }} className={classes.titles} variant="subtitle1">
                            <strong>SKU Summary</strong>
                        </Typography>
                        <TableContainer>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow >
                                        <TableCell><strong>Total Sku Codes</strong></TableCell>
                                        <TableCell style={{ color: green[900] }}>{arregloskus.totalsku}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell><strong>Total FOB US$</strong></TableCell>
                                        <TableCell style={{ color: green[900] }}>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(arregloskus.totalfob)}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell><strong>Total Estimated Duties</strong></TableCell>
                                        <TableCell style={{ color: green[900] }}></TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell> <strong>Other Duties (Total)</strong></TableCell>
                                        <TableCell style={{ color: green[900] }}></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br></br>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <TableContainer>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <Typography style={{ color: blue[900] }} className={classes.titles} variant="subtitle1" gutterBottom>
                                                <strong>SKU DETAILS</strong>
                                            </Typography>
                                        </TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow >
                                        <TableCell><strong>SKU Code</strong></TableCell>
                                        <TableCell style={{ color: blue[800] }}> {skus.sku}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell><strong>Short Description</strong></TableCell>
                                        <TableCell style={{ color: blue[800] }}>{skus.shortdescription}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell><strong>FOB Value (by Sku) USD</strong></TableCell>
                                        <TableCell style={{ color: blue[800] }}>{skus.fob && new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(skus.fob)}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell> <strong>HTS Number (8 Digits)</strong></TableCell>
                                        <TableCell style={{ color: blue[800] }}>{skus.hts8}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell> <strong>General Duties (USA)</strong></TableCell>
                                        <TableCell style={{ color: blue[800] }}>{skus.duties}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell> <strong>FTA (USA)</strong></TableCell>
                                        <TableCell style={{ color: blue[800] }}>{skus.duties}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell> <strong>CBP Description</strong></TableCell>
                                        <TableCell style={{ color: blue[800] }}>{skus.htsdescription}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <TextField
                                id="qty"
                                name="qty"
                                label="SKU Quantities"
                                variant="outlined"
                                color="secondary"
                                type="number"
                                value={skus.qty || ''}
                                onChange={handleqtyChange}
                            />
                            <Typography className={classes.titles} style={{ color: red[400] }} variant="caption" gutterBottom>
                                <strong>Input Quantities to Export</strong>
                            </Typography>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <Button onClick={submitsku} variant="contained" color="secondary">+ Add Item to List</Button>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <SkuComponentList event={arregloskus.arreglosdelsku} />
                </Grid>
            </Grid>
        </form >
    );
}












