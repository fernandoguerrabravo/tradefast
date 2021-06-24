import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

export const SkuStoreFiles = () => {


    const [state, setstate] = useState({

        selectedFile: null
    })

    const onChangeHandler = (event) => {

        setstate({

            selectedFile: event.target.files[0],

        })


    };

    const onClickHandler = () => {

        console.log(state.selectedFile)
        const juan = state.selectedFile;
        const data = new FormData()
        data.append('file', juan)
        console.log(data)
        var requestOptions = {


            method: 'POST',
            redirect: 'follow',
            body: JSON.stringify(data),

        };

        fetch("https://vwat0hqjt0.execute-api.us-east-1.amazonaws.com/dev/uploadskufile", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    return (

        <>

            <TextField
                id="file1"
                name="file1"
                type="file"
                onChange={onChangeHandler}
                variant="outlined"
            />

            <button onClick={onClickHandler} type="button" >Upload</button>
        </>

    );

}
