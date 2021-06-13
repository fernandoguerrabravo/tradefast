import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import FuseMessage from '@fuse/core/FuseMessage';
import swal from 'sweetalert';
import { SimplePopover } from '../hooks/mensaje';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch'
        }
    }
}));

export const AddCategory = ({ setCategories }) => {
    const classes = useStyles();

    const [inputValue, setInputValue] = useState(

        {
            sku: '',
            keyword: ''

        }
    );

    const handleInputChange = (event) => {
        //console.log(e.target.value)

        setCategories(

            {
                hidden: false
            });

        setInputValue({

            ...inputValue,
            [event.target.name]: event.target.value

        });
    };

    function onKeyDown(keyEvent) {
        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
            keyEvent.preventDefault();
        }
    }

    const handleSubmit = e => {

        e.preventDefault();
        if (inputValue.keyword.trim().length > 3 && inputValue.sku.trim() != '') {
            setCategories(

                {
                    sku: inputValue.sku,
                    keyword: inputValue.keyword,
                    hidden: true

                }
            );
            setInputValue({

                sku: '',
                keyword: ''

            });

        } else {

            swal({
                title: "oops!",
                text: "Please insert a valid Keyword and SKU Reference!",
                icon: "warning",
            });

        }
    };

    return (

        <form onKeyDown={onKeyDown} onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <FormControl>
                <TextField
                    id="sku"
                    name="sku"
                    value={inputValue.sku}
                    label="Your SKU Reference"
                    onChange={handleInputChange}
                    variant="outlined"
                />
            </FormControl>
            <FormControl>
                <TextField
                    id="keyword"
                    name="keyword"
                    value={inputValue.keyword}
                    label="Keyword Product"
                    onChange={handleInputChange}
                    variant="outlined"
                />
            </FormControl>
            <Button type="submit" variant="contained" color="secondary">
                Search
			</Button>
        </form>
    );
};

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

};
