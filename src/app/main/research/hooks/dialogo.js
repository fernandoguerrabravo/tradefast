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

    const [state_2, setstate_2] = useState(
       {
        rank_0 : '',
        category_0 : ''
       }
    );

    console.log(state.cod);

    //Funcion aque va a rescatar la informacion de la API 
    const getDetails = async () => {

        setstate({
            ...state,
            loading: true
        });

        var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-host", "amazon-data.p.rapidapi.com");
        myHeaders.append("x-rapidapi-key", "639c8104e9msh4d6ed94de6b4760p1d0279jsnbff33f29daba");
        myHeaders.append("useQueryString", true);

        var requestOptions = {

            method: 'GET',
            headers: myHeaders,

        };

        const url = `https://amazon-data.p.rapidapi.com/asin.php?asin=${codigo.codigo}&region=us`;
        const resp = await fetch(url, requestOptions);
        const detail = await resp.json();
      
        setstate({

            title: detail?.asin_name ?? '',
            imagen: detail?.asin_images[0] ?? '',
            loading: false,
            cod: detail?.asin ?? '',
            seller: detail?.merchant_name ?? '',
            brand: detail?.brand_name ?? '',
            dimensions: detail?.asin_informations['Package Dimensions'] ?? '',
            model: detail?.asin_informations['Item model number'] ?? '',
            rank : detail?.asin_informations['Best Sellers Rank']?? '',
            peso : detail?.asin_informations['Item Weight']?? '',
            desde : detail?.asin_informations['Date First Available']?? ''
            
            /* available: detail?.product?.product_information?.available_from ?? '',
             manufacturer: detail?.product?.product_information?.manufacturer ?? '',
            
             quantity: detail?.product?.product_information?.qty_per_order ?? '',
             feature_0: detail?.product?.feature_bullets[0] ?? '',
             feature_1: detail?.product?.feature_bullets[1] ?? '',
             feature_2: detail?.product?.feature_bullets[2] ?? '',
             feature_3: detail?.product?.feature_bullets[3] ?? '',
             feature_4: detail?.product?.feature_bullets[4] ?? '' */


        })

        var myHeaders_2 = new Headers();
        myHeaders_2.append("x-rapidapi-key", "639c8104e9msh4d6ed94de6b4760p1d0279jsnbff33f29daba");
        myHeaders_2.append("x-rapidapi-host", "egrow-amazon-live-data.p.rapidapi.com");
        myHeaders_2.append("useQueryString", "true");

        var requestOptions_2 = {
            method: 'GET',
            headers: myHeaders_2,
            redirect: 'follow'
        };

        const url_2 = `https://egrow-amazon-live-data.p.rapidapi.com/products/${codigo.codigo}?marketplaceId=USA`;
        const resp_2 = await fetch(url_2, requestOptions_2);
       const detail_2 = await resp_2.json();
        
        console.log(detail_2);
        setstate_2({
            
            estimada : detail_2?.sales_metrics?.estimated_monthly_sales ?? '',
            revenue :  detail_2?.sales_metrics?.estimated_monthly_revenue ?? '',
            precio : detail_2?.price ?? '', 

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
                            <RecipeReviewCard event={state} event_2 = {state_2}/>
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
