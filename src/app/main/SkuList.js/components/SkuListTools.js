import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';

export const SkuListTools = () => {

    const search = () => {

    }

    return (

        <>
            <Grid
                container
                direction="row"
                justify="flex-end"
                spacing={2}
            >
                <Grid item>
                    <Link
                        role="button"
                        to="/skustore"
                    >
                        <Button variant="contained" color="secondary">+ New Product</Button>
                    </Link>
                </Grid>
            </Grid>
        </>

    )
}


