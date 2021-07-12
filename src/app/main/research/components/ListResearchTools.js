
import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';

export const ListResearchTools = ({ setescondidoinicial }) => {

    const research = () => {

        setescondidoinicial({

            escondidoinicial: false

        })

    }


    return (

        <>

            <Button onClick={research} variant="contained" color="primary">+ New Search</Button>

        </>

    )
}
