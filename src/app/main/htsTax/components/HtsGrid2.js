import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HtsHeader from './HtsHeader';
import { green, red, blue } from '@material-ui/core/colors';
import { UseFetchClas } from '../hooks/UseFetchClas';
import MaterialTable from 'material-table';

const useStyles = makeStyles({
    table: {
        minWidth: 750,
    },
    centrar: {

        textAlign: 'center',
        direction: "row",
        justify: "center",
        alignItems: "center"
    }
});

export const HtsGrid2 = ({ encabezado }) => {

    // const { data, loading, finales } = UseFetchHts(encabezado.hts)
    const { data, loading, finales } = UseFetchClas(encabezado.hts)

    //const { categorias } = UseFetchHtsCategory(encabezado.hts);

    //{loading && <p>Loading Results...</p>}
    const classes = useStyles();

    const columnas = [

        {
            title: 'HTS Number',
            field: 'htsno',
            
        },

        {
            title: 'Brief Description',
            field: 'description',
           
        },

    ]

    return (

        //Aqui tengo las dos columnas que vamos a renderizar //
        // Primera Columna Resumen de la Solicitud y Muestra los TAXES
        <>
            <Grid item xs={4}>
                <Paper className={classes.paper}><HtsHeader event={encabezado} /></Paper>
            </Grid>
            <Grid item xs={4}>
                { /* <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><h3 className={classes.color}>Product Category</h3></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                         <HtsGetListCategories event={categorias} /> 
                        </TableBody>
                    </Table>
                </TableContainer>  */}
            </Grid>
            <Grid item xs={4}>

                <Paper className={classes.paper}>

                    { /* <HtsGetListHts eventos={finales} categorias={categorias} /> */}
                </Paper>

            </Grid>
            <Grid item xs={12}>
                <Paper>

                    <MaterialTable

                        title="Select Suggest HTS"
                        columns={columnas}
                        data={data}
                    >

                    </MaterialTable>
                </Paper>
            </Grid>

        </>

    )
}

/*
{
    data.map(img => (
        <HtsResultList
            key={img.htsno}
            {...img}
        />
    ))
} */
/*
   <TableBody>

                        {
                            data.map(img => (
                                <HtsResultList
                                    key={img.hts}
                                    {...img}
                                />
                            ))
                        }
                    </TableBody> */

/*              <TableBody>

              {
                  data.map(img => (
                      <HtsResultList
                          key={img.htsno}
                          {...img}
                      />
                  ))
              }
          </TableBody> */