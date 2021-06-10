
import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';

export const ListHtsTools = () => {

    const research = () => {

    }

    //<SimplePopover codigo = {id}/> 
    return (

        <>
            <IconButton color="primary" aria-label="add to shopping cart">
                <RefreshOutlinedIcon />
            </IconButton>
            <Link
                role="button"
                to="htsTax"
            >
                <Button variant="contained" color="secondary">+ New Search</Button>
            </Link>



        </>

    )
}
