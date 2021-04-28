import React, {useState} from 'react';
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
        loading: false

    });

    console.log(state.cod);

    //Funcion aque va a rescatar la informacion de la API 
    const getDetails = async () => {

        setstate({
            ...state,
            loading: true
        });

        var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-host", "amazon-product-reviews-keywords.p.rapidapi.com");
        myHeaders.append("x-rapidapi-key", "d8b96c6b55mshf883ce53b80b403p113b42jsne6116c86b747");
        myHeaders.append("useQueryString", true);

        var requestOptions = {

            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        const url = `https://amazon-product-reviews-keywords.p.rapidapi.com/product/details?asin=${state.cod}&country=US`;
        const resp = await fetch(url, requestOptions);
        const detail = await resp.json();
        console.log(detail);
        setstate({

            rank: detail?.product?.bestsellers_rank[0]?.rank ?? '',
            title: detail?.product?.title ?? '',
            loading: false,
            cod: detail?.product?.asin ?? '',
            imagen: detail?.product?.main_image ?? '',
            seller: detail?.product?.product_information?.manufacturer ?? '',
            description: detail?.product?.description ?? '',

        })

    }


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
      {state.loading ? <CircularProgress color="primary" size = {40} /> : 
      <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Details
      </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Modal title
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
