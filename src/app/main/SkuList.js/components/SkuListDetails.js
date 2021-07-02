import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGetSkuDetails } from '../hooks/useGetSkuDetails';
import { Typography } from '@material-ui/core';
import { green, red, blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

    type: {

        padding: theme.spacing(1),
        color: theme.palette.text.secondary,

    },


}));

// Funcion para renderizar mis detalles 

export default function PreviewCard({ event }) {


    const info = useGetSkuDetails(event.skunumber)
    const infofinal = info.data;
    const classes = useStyles();
    const cardHeaderStyles = useContainedCardHeaderStyles();
    const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
    const cardHeaderShadowStyles = useFadedShadowStyles();

    return (

        <div>
            <Typography variant="h5" component="h5" style={{ color: blue[900] }} className={classes.type}>Product Details</Typography>
            <br></br>
            <Table className={classes.type}>
                <TableBody>
                    <TableRow>
                        <TableCell><strong>SKU Code</strong></TableCell>
                        <TableCell><strong>{infofinal.sku}</strong></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Short Description</strong></TableCell>
                        <TableCell><strong>{infofinal.shortdescription}</strong></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>FOB</strong></TableCell>
                        <TableCell><strong> {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(infofinal.fob)}</strong></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Country Origin</strong></TableCell>
                        <TableCell><strong>{infofinal.country_origin}</strong></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>HTS</strong></TableCell>
                        <TableCell><strong>{infofinal.hts8}</strong></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>General Duties</strong></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Others Duties</strong></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>CBP Description</strong></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Categories</strong></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Min Sell Price</strong></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Average Sell Price</strong></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Max Sell Price</strong></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

