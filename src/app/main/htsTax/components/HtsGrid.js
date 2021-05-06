import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import  {UseFetchHts}  from '../hooks/UseFetchHts';
import { HtsResultList } from './HtsResultList';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export const HtsGrid = ({evento}) => {

  const { data, loading } = UseFetchHts(evento)
   //{loading && <p>Loading Results...</p>}
    const classes = useStyles();
    //console.log(data.htsno);

    return (
        <>
            
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Rating</TableCell>
                            <TableCell>Link to Amazon</TableCell>
                        </TableRow>
                    </TableHead>
                     <TableBody>

                        {
                            data.map(img => (
                                <HtsResultList
                                    key={img.hts}
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

/*
{
    data.map(img => (
        <HtsResultList
            key={img.htsno}
            {...img}
        />
    ))
} */