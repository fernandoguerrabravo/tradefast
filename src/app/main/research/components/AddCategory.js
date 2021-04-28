import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import FuseMessage from '@fuse/core/FuseMessage';
import swal from 'sweetalert';
import  {SimplePopover} from '../hooks/mensaje'


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
       

        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            
            <TextField id="standard-basic" label="Input Keyword" value={inputValue} onChange={handleInputChange} />
        
        </form>

     

    )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}
