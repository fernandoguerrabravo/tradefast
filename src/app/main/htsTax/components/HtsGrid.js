import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { UseFetchHts } from '../hooks/UseFetchHts';
import { HtsResultList } from './HtsResultList';
import { UseFetchHtsCategory } from '../hooks/UseFetchHtsCategory';
import { HtsGetListCategories } from './HtsGetListCategories';
import Grid from '@material-ui/core/Grid';
import HtsHeader from './HtsHeader';
import { green, red , blue} from '@material-ui/core/colors';

const useStyles = makeStyles({
    table: {
        minWidth: 200,
    },
    color: {
        
        color: blue[700]
    }
});

export const HtsGrid = ({ encabezado }) => {

    const { data, loading, finales } = UseFetchHts(encabezado.hts)

    const { categorias } = UseFetchHtsCategory(encabezado.hts);

    //{loading && <p>Loading Results...</p>}
    const classes = useStyles();                                                       

    return (

        //Aqui tengo las dos columnas que vamos a renderizar //
        // Primera Columna Resumen de la Solicitud y Muestra los TAXES
        <>
            <Grid item xs={4}>
                <Paper className={classes.paper}><HtsHeader event={encabezado} codigos={finales} /></Paper>
            </Grid>
            <Grid item xs={4}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><h3 className= {classes.color}>Product Category</h3></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <HtsGetListCategories event={categorias} />
                    </TableBody>
                </Table>
            </TableContainer>
            </Grid>
            <Grid item xs={4}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><h3 className= {classes.color}>Product Category</h3></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <HtsGetListCategories event={categorias} />
                    </TableBody>
                </Table>
            </TableContainer>
            </Grid>
            <Grid item xs ={12}>
            <Paper>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><h4>Suggested HTS Code</h4></TableCell>
                            <TableCell></TableCell>
                          
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            data.map(img => (
                                <HtsResultList
                                    key={img.htsno}
                                    {...img}
                                />
                            ))
                        }
                    </TableBody>

                </Table>
            </TableContainer>
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