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

            rank_0: detail?.product?.bestsellers_rank[0]?.rank ?? '',
            category_0: detail?.product?.bestsellers_rank[0]?.category ?? '',
            rank_1: detail?.product?.bestsellers_rank[1]?.rank ?? '',
            category_1: detail?.product?.bestsellers_rank[1]?.category ?? '',
            rank_2: detail?.product?.bestsellers_rank[2]?.rank ?? '',
            category_2: detail?.product?.bestsellers_rank[2]?.category ?? '',
            title: detail?.product?.title ?? '',
            loading: false,
            cod: detail?.product?.asin ?? '',
            imagen: detail?.product?.main_image ?? '',
            description: detail?.product?.description ?? '',
            seller: detail?.product?.product_information?.sold_by ?? '',
            dimensions: detail?.product?.product_information?.dimensions ?? '',
            weight: detail?.product?.product_information?.weight ?? '',
            available: detail?.product?.product_information?.available_from ?? '',
            manufacturer: detail?.product?.product_information?.manufacturer ?? '',
            model: detail?.product?.product_information?.model_number ?? '',  
            quantity: detail?.product?.product_information?.qty_per_order ?? '',  
            brand:    detail?.product?.product_information?.brand ?? '',
            feature_0 : detail?.product?.feature_bullets[0] ?? '',
            feature_1 : detail?.product?.feature_bullets[1] ?? '',
            feature_2 : detail?.product?.feature_bullets[2] ?? '',
            feature_3 : detail?.product?.feature_bullets[3] ?? '',
            feature_4 : detail?.product?.feature_bullets[4] ?? ''


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
