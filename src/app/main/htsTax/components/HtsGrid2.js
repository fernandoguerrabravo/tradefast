import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HtsHeader from './HtsHeader';
import { green, red, blue } from '@material-ui/core/colors';
import { UseFetchClas } from '../hooks/UseFetchClas';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';

const useStyles = makeStyles({
    table: {
        minWidth: 750
    },
    centrar: {

        textAlign: 'center',
        direction: "row",
        justify: "center",
        alignItems: "center"
    }
});

export const HtsGrid2 = ({ encabezado, setencabezado }) => { // const { data, loading, finales } = UseFetchHts(encabezado.hts)


    const { data, loading, finales } = UseFetchClas(encabezado.hts)
    // const { categorias } = UseFetchHtsCategory(encabezado.hts);
    // {loading && <p>Loading Results...</p>}
    //console.log("datos iniciales", data);

    const detailhts = (e, f, g) => {

        setencabezado({
            ...encabezado,
            hidden1: true,
            hidden: false,
            hts: e,
            hts8: e,
            general: f,
            special: g
        });
    }

    const classes = useStyles();

    const columnas = [

        {
            title: 'HTS Number',
            field: 'htsno',


        }, {
            title: 'Brief Description',
            field: 'description'

        },

    ];

    const actions = [
        {
            icon: () => <SaveOutlinedIcon color="primary" fontSize="large" />,
            tooltip: 'Select HTS Number',
            onClick: (event, rowData) => detailhts(rowData.htsno, rowData.general, rowData.special)
        }
    ];

    return (

        <>

            < Grid item xs={12}>
                <Paper>
                    <MaterialTable title="Select Suggest HTS"
                        columns={columnas}
                        data={data}
                        actions={actions}
                        options={{
                            actionsColumnIndex: -1
                        }}
                    >
                    </MaterialTable>
                </Paper>
            </Grid> </>
    )
}



