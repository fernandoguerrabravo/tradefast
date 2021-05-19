
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
export const ListResearchTools = () => {


    //<SimplePopover codigo = {id}/> 
    return (

        <>
            <IconButton color="primary" aria-label="add to shopping cart">
                <RefreshOutlinedIcon />
            </IconButton>
            <Button variant="contained" color="secondary" >+ New</Button>

        </>

    )
}
