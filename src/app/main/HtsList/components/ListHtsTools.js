
import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';

export const ListHtsTools = () => {

    const search = () => {

    }

    //<SimplePopover codigo = {id}/> 
    return (

        <>
            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="right"
                spacing={2}

            >

                <Grid item>
                    <Link
                        role="button"
                        to="htsTax"
                    >
                        <Button onClick={search} variant="contained" color="secondary">+ New Search</Button>

                    </Link>
                </Grid>

            </Grid>

        </>

    )
}


