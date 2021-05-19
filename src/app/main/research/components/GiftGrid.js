
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    centrar: {


        textAlign: 'center',

        direction: "row",
        justify: "center",
        alignItems: "center"

    }
});

export const GiftGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category)
    //{loading && <p>Loading Results...</p>}
    const classes = useStyles();
    console.log(category)
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            { loading ? <Grid className={classes.centrar} item xs={12}><CircularProgress color="primary" size={60} /></Grid> :
                <>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center" item xs={12}><Button  variant="contained" color="primary">Save Your Search</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><br></br><h3>Keyword Search: {category}</h3><br></br></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {
                                        data.map(img => (
                                            <GifGridItem
                                                key={img.id}
                                                {...img}
                                            />
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </>
            }
        </>
    )
}
