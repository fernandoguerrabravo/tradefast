
import React, { useState, useEffect }  from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

import  {SimplePopover} from '../hooks/mensaje'
import CustomizedDialogs from '../hooks/dialogo';


export const GifGridItem = ({ id, title, url, price, reviews, total_reviews}) => {

const link = `https://www.amazon.com/dp/${id}`;

 //<SimplePopover codigo = {id}/> 
  return (

    <TableRow>
      <TableCell>
      <br></br><img width="120" height="120" src={url} alt={title} /><br></br>
      </TableCell>
      <TableCell> 
      <CustomizedDialogs codigo = {id} />
      </TableCell>
      <TableCell><p>{total_reviews} Reviews</p>{star(reviews)}<p>{reviews} out of 5 stars</p></TableCell>
      <TableCell><a href= {link} target="_blank">Product Asin: {id}</a></TableCell>
     
     </TableRow>


    )
}
