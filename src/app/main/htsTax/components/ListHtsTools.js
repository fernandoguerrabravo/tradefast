
import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import Grid from '@material-ui/core/Grid';

export const ListHtsTools = ({ setencabezado }) => {

    const search = () => {

        setencabezado({

            ...setencabezado,
            hidden3: false,
            hidden2: true
        })

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
                <Grid item>
                    <Link
                        role="button"
                        to="htstaxlist"
                    >
                        <Button onClick={search} variant="contained" color="secondary">+ Back to List</Button>

                    </Link>
                </Grid>
            </Grid>
        </>
    )
}