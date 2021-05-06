import React, { useState, useEffect }  from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


export const HtsResultList = ({ htsno }) => {

 //<SimplePopover codigo = {id}/> 
  
 return (

    <TableRow>
      
      <TableCell >{htsno}</TableCell>
    
     
     </TableRow>


    )
 } 