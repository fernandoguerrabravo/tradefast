import React, { useState, useEffect } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { green, red, blue } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';

export const HtsResultList = ({ htsno, description, general, special }) => {

   
   //<SimplePopover codigo = {id}/> 
   console.log(htsno);
   return (
      <>
         <TableRow>
            <TableCell ><Button>{htsno}</Button></TableCell>
            <TableCell>{description}</TableCell>
            {/* <TableCell >{general}</TableCell>
            <TableCell >{special}</TableCell> */}
         </TableRow> 
      </>
   )
}