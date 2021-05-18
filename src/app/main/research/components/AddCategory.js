import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import FuseMessage from '@fuse/core/FuseMessage';
import swal from 'sweetalert';
import { SimplePopover } from '../hooks/mensaje'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export const AddCategory = ({ setCategories }) => {

    const classes = useStyles();

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        //console.log(e.target.value)
        setInputValue(e.target.value)
    }

    function onKeyDown(keyEvent) {
        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
          keyEvent.preventDefault();
        }
      }

    const handleSubmit = (e) => {

        e.preventDefault();
       
        if (inputValue.trim().length > 3) {
            setCategories([inputValue]);
            setInputValue('');
        } else {
            swal('Please insert a KeyWord')
        }
    }

    return (


        <form onKeyDown={onKeyDown} onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <FormControl>
            <TextField id="outlined-basic" value={inputValue} label="Search Product" onChange={handleInputChange} variant="outlined" />
            </FormControl>
            <FormControl>
            <Button type="submit" variant="contained" color="secondary">
                   Search
            </Button>
            </FormControl>
        </form>



    )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}
