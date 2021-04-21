
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


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export const GiftGrid = ({ category }) => {
    const { data, loading } = useFetchGifs(category)
    const classes = useStyles();
    return (
        <>
            {loading && <p>Loading Results...</p>}

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell align="center">ASIN</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Price (USD)</TableCell>
                            <TableCell align="center">Score</TableCell>
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

        </>
    )
}
