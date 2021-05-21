import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RecipeReviewCard from './cardDetails';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));



export const SimplePopover = (codigo) => {

  //inicio los estados y contenidos de la información que se desplegara en el popover
  const [state, setstate] = useState({
    rank: '',
    title: '',
    imagen: '',
    cod: codigo.codigo,
    loading: false

  });

  //console.log(state.cod);


  //Funcion aque va a rescatar la informacion de la API 
  const getDetails = async () => {

    setstate({
      ...state,
      loading: true
    });

    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "amazon-product-reviews-keywords.p.rapidapi.com");
    myHeaders.append("x-rapidapi-key", "cbb302deccmsh69f9792bef12280p17c8a1jsn5d4e9d17ba41");
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
    //console.log(detail);
    setstate({

      rank: detail?.product?.bestsellers_rank[0]?.rank ?? '',
      title: detail?.product?.title ?? '',
      loading: false,
      cod: detail?.product?.asin ?? '',
      imagen: detail?.product?.main_image ?? '',
      seller: detail?.product?.product_information?.sold_by ?? '',
      description: detail?.product?.description ?? '',

    })

  }

  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = useState(null);



  const handleClick = (event) => {

    setAnchorEl(event.currentTarget);
    getDetails();


  };



  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (

    <div>
      
       {state.loading ? <CircularProgress color="secondary" size = {30} /> : 
       <>
       <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}> Details</Button>
       <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <RecipeReviewCard event={state} />
        </Popover>
        </>
      }             
       
    </div>
  );
}
