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
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import StorefrontIcon from '@material-ui/icons/Storefront';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch'
        }
    },
    search: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },

    iconButton: {
        padding: 10,
    },

    divider: {
        height: 28,
        margin: 4,
    },
}));

export const AddCategory = ({ setCategories }) => {

    const classes = useStyles();

    const [inputValue, setInputValue] = useState(

        {
            //sku: '',
            keyword: ''

        }
    );

    const handleInputChange = (event) => {
        //console.log(e.target.value)

        

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
        if (inputValue.keyword.trim().length > 3) {

            setCategories(

                {

                    keyword: inputValue.keyword,
                    hidden: true,
                    hidden1: false,
                    hidden2: true,
                    selected: [],



                }
            );

            setInputValue({

                // sku: '',
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

            <Paper className={classes.search}>
                <IconButton className={classes.iconButton} aria-label="menu">
                    <StorefrontIcon />
                </IconButton>
                <InputBase

                    id="keyword"
                    name="keyword"
                    className={classes.input}
                    placeholder="Insert a Product Keyword"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    value={inputValue.keyword}
                    onChange={handleInputChange}
                />
                <IconButton color="secondary" type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                    <DirectionsIcon />
                </IconButton>
            </Paper>
        </form>
    );
};


