import React, { useState } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGetSkuDetails } from '../hooks/useGetSkuDetails';
import { IfFulfilled, IfPending, IfRejected, PromiseFn, useAsync } from 'react-async';



const useStyles = makeStyles(({ spacing }) => ({

    card: {

        marginTop: 40,
        borderRadius: spacing(4),
        transition: '0.3s',
        width: '100%',
        overflow: 'initial',
        background: '#ffffff',
    },
    content: {
        paddingTop: 0,
        textAlign: 'left',
        overflowX: 'auto',
        '& table': {
            marginBottom: 0,
        }
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

        <Card className={cx(classes.card, cardShadowStyles.root)}>

            <CardHeader
                className={cardHeaderShadowStyles.root}
                classes={cardHeaderStyles}
                title={'SKU Code : ' + infofinal.sku}
                subheader={infofinal.shortdescription}
            />

            <CardContent className={classes.content}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Details</TableCell>
                            <TableCell align="right"></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>FOB</TableCell>
                            <TableCell>US$ {infofinal.fob}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Country Origin</TableCell>
                            <TableCell>{infofinal.country_origin}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>HTS</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>General Duties</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>FTA</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

