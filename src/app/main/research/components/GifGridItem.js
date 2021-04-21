
import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

export const GifGridItem = ( {id, title, url, price, score} ) => {
    
    return (

    
            <TableRow>
              <TableCell>
              <img width="80" height="80" src = {url} alt = {title} />
              </TableCell>
              <TableCell >{id}</TableCell>
              <TableCell >{title}</TableCell>
              <TableCell >{price}</TableCell>
              <TableCell >{score}</TableCell>
            </TableRow>
    
       
    )
}
