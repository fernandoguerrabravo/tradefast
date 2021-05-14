
import React, { useState, useEffect }  from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { star } from '../hooks/star';
import  {SimplePopover} from '../hooks/mensaje'
import CustomizedDialogs from '../hooks/dialogo';


export const GifGridItem = ({ id, title, url, price, reviews, total_reviews}) => {

const link = `https://www.amazon.com/dp/${id}`;

 //<SimplePopover codigo = {id}/> 
  return (

    <TableRow>
      <TableCell>
        <img width="80" height="80" src={url} alt={title} />
      </TableCell>
      <TableCell className='text-center'> 
      <CustomizedDialogs codigo = {id} />
      </TableCell>
      <TableCell ><p>{total_reviews} Reviews</p>{star(reviews)}<p>{reviews} out of 5 stars</p></TableCell>
      <TableCell ><a href= {link} target="_blank">Product Asin: {id}</a></TableCell>
     
    
     
     </TableRow>


    )
}
