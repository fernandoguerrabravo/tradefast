import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import { green, red, blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Select from 'react-select';
import { UseGetCountry } from '../hooks/useGetCountry';
import HtsSku from './HtsSku';
import { useGetSkuHts } from '../hooks/useGetSkuHts';


const styles = (theme) => ({

    root: {
        margin: 0,
        padding: theme.spacing(2),
    },

    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },


});

const styles2 = makeStyles((theme) => ({

    icons: {

        fontSize: "small",
        backgroundColor: red[500],
        color: red[500]
    },

    formControl2: {


        minWidth: 280,
        padding: theme.spacing(1)
    },

    formControl1: {

        minWidth: 560,
        padding: theme.spacing(1)
    },


}));

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function ModalSku() {


    const classes2 = styles2();

    const [open, setOpen] = React.useState(false);

    const [guardarsku, setguardarsku] = useState({

        id_cliente: '',
        sku: '',
        shortdescription: '',
        fob: '',
        hidden: false,
        country_origin: '',
        upc_number: ''

    })

    const handlingChange = (event) => {

        setguardarsku({

            ...guardarsku,
            [event.target.name]: event.target.value

        })


    }

    const SelectChange = (event) => {

        setguardarsku({

            ...guardarsku,
            country_origin: event.value

        })

    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {

        // SaveSku()
        //history.push('/htstaxlist')
        setOpen(false);
    };

    const country = UseGetCountry();
    const countryfinal = country.data;

    const newJson1 = [];
    for (const pais of countryfinal) {
        {
            newJson1.push({
                value: pais.Code, label: pais.Name
            });
        }
    }

    const [hidden, sethidden] = useState(

        {
            escondido: false
        }
    )
    const [clas, useclas] = useState(
        {
            datos: ''
        }
    )
    const buscarhts = () => {

        sethidden({ escondido: true })
        useclas({ datos: guardarsku.shortdescription })
        console.log("eeeeeee", guardarsku.shortdescription)
    }

    return (

        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Create New Product
            </Button>&nbsp;&nbsp;
            <Tooltip title="Create a New SKU. If you can't find it in the list"><InfoIcon style={{ color: green[500] }} /></Tooltip>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    New Product
                </DialogTitle>
                <DialogContent dividers>

                    <FormControl variant="outlined" className={classes2.formControl2} variant="outlined">
                        <TextField
                            id="sku"
                            name="sku"
                            label="Product Code (SKU)"
                            variant="outlined"
                            color="primary"
                            type="text"
                            value={guardarsku.sku}
                            onChange={handlingChange}
                        />
                        <Typography style={{ color: red[400] }} variant="caption" gutterBottom>
                            <strong>Input Quantities to Export</strong>
                        </Typography>
                    </FormControl>
                    <FormControl className={classes2.formControl2} variant="outlined">
                        <TextField
                            id="upc_number"
                            name="upc_number"
                            label="UPC Number"
                            variant="outlined"
                            color="primary"
                            type="number"
                            value={guardarsku.upc_number}
                            onChange={handlingChange}
                        />
                        <Typography style={{ color: red[400] }} variant="caption" gutterBottom>
                            <strong>Input Quantities to Export</strong>
                        </Typography>
                    </FormControl>

                    <FormControl className={classes2.formControl2} variant="outlined">

                        <TextField
                            id="fob"
                            name="fob"
                            label="FOB Value"
                            variant="outlined"
                            color="primary"
                            type="number"
                            value={guardarsku.fob}
                            onChange={handlingChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">US$</InputAdornment>,
                            }}
                        />
                        <Typography style={{ color: red[400] }} variant="caption" gutterBottom>
                            <strong>Input Quantities to Export</strong>
                        </Typography>
                    </FormControl>
                    <FormControl className={classes2.formControl2} variant="outlined">
                        <InputLabel shrink><strong>Country Origin</strong></InputLabel>
                        <Select
                            id="country_origin"
                            name="country_origin"
                            options={newJson1}
                            onChange={SelectChange}
                        />
                    </FormControl>
                    <FormControl className={classes2.formControl1} variant="outlined">
                        <TextField
                            id="shortdescription"
                            name="shortdescription"
                            label="Display Name (Short Description)"
                            variant="outlined"
                            color="primary"
                            type="text"
                            value={guardarsku.shortdescription}
                            onChange={handlingChange}
                        />
                    </FormControl>
                    <Typography style={{ color: red[400] }} variant="caption" gutterBottom>
                        <strong>Input Quantities to Export</strong>
                    </Typography>
                    <FormControl className={classes2.formControl1} variant="outlined">
                        <Button onClick={buscarhts} color="primary">
                            Search HTS
                        </Button>
                    </FormControl>
                    <FormControl> {hidden.escondido && <HtsSku event={guardarsku.shortdescription} />}</FormControl>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}