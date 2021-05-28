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
import RecipeReviewCard from './cardDetails';
import CircularProgress from '@material-ui/core/CircularProgress';

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

export default function CustomizedDialogs(codigo) {

    //inicio los estados y contenidos de la información que se desplegara en el popover

    const [state, setstate] = useState({

        rank: '',
        title: '',
        imagen: '',
        cod: codigo.codigo,
        loading: false,
        dimensions: []

    });

    /* const [state_2, setstate_2] = useState(
        {
         rank_0 : '',
         category_0 : ''
        }
     ); */

    console.log(state.cod);

    //Funcion aque va a rescatar la informacion de la API 
    const getDetails = async () => {

        setstate({
            ...state,
            loading: true
        });

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({

            "asin": codigo.codigo

        });

        var requestOptions = {

            method: 'POST',
            headers: myHeaders,
            body: raw,
           

        };

        const url = `https://kne6zd76af.execute-api.us-east-1.amazonaws.com/dev/getdetails`;
        const resp = await fetch(url, requestOptions);
        const detail = await resp.json();
        setstate(detail)
        console.log("perro:", detail)

    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        getDetails();
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div>
            {state.loading ? <CircularProgress color="primary" size={40} /> :
                <>
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        Details
                    </Button>
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                            Sold by: {state.seller}
                        </DialogTitle>
                        <DialogContent dividers>
                            <RecipeReviewCard event={state} />
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose} color="primary">
                                Save changes
                        </Button>
                        </DialogActions>
                    </Dialog>
                </>
            }
        </div>

    );
}
