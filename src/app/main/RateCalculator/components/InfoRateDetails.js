import React ,{ useEffect, useState , FC, ReactElement } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  IfFulfilled,
  IfPending,
  IfRejected,
  PromiseFn,
  useAsync
} from "react-async";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';



/*const useStyles = makeStyles((theme) => ({

  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  formControl: {
    margin: theme.spacing(2),
    minWidth: 400,
    padding: '50px 50px 0px 0px',
  },

}));*/

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },

}));

const getDetails = async ({id}) => {
    
  const requestOptions = {

   method: 'POST',
   headers: {
       'Content-Type': 'application/json'
   },
   body: JSON.stringify({id})
  
 };
   const response = await (await fetch(`https://tlj0xssu56.execute-api.us-east-1.amazonaws.com/dev/getquotationsbyid`, requestOptions )).json();
   
   console.log("respuesta fetch:", response);

   return response[0];
};


const DetailsPreview = ({id}) => {

    const classes = useStyles();

    const state = useAsync({ promiseFn: getDetails, id });
    
  return (

  <>
    <p>Querying for {id}</p>
    <IfPending state={state}>Loading...</IfPending>
    <IfRejected state={state}>
      {(error) => `Something went wrong: ${error.message}`}
    </IfRejected>
    <IfFulfilled state={state}>
      {(data) => (
        <div>
          <strong>Loaded some data:</strong>
          <Grid container spacing={3}>
          <Grid item xs={4}>
          <Paper className={classes.paper}>
            
        <List component="nav" aria-label="main mailbox folders">
         <ListItem>
          <ListItemIcon>
              <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Origin Address"/><p></p>
         </ListItem>
          <ListItem>{data.origin_info.number} {data.origin_info.address}<p></p></ListItem>
          <ListItem>{data.origin_info.city}, {data.origin_info.state}, {data.origin_info.country}, {data.origin_info.zipcode}<p></p></ListItem>
         
          <ListItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Destination Address" />
        </ListItem>
      </List>
      <Divider />
             
             
             
              <pre>{JSON.stringify(data.origin_info, null, 2)}</pre>
          
          
          
          
              <pre>{JSON.stringify(data.destination_info, null, 2)}</pre>

          </Paper> 
          </Grid>
          </Grid>
        </div>
      )}
    </IfFulfilled>
  </>

  )
};


export default  function  InfoRateDetails({id_details}) {

    return (

      <div>
        <h1>Testing Async Components</h1>
        <h2>This sandbox is using react-async</h2>
        <DetailsPreview key= {id_details} id= {id_details}/>
      </div>
    );

};

/* 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </div>
  );
}


*/
/*
  const idem = "60be9f544acbab01f0e6e827"
  const headers = { Accept: "application/json" }
  const options = {
   
    body :  JSON.stringify({"id": idem}),
    method: 'POST',
   
  } */
  /*  setdetalles(useFetch('https://tlj0xssu56.execute-api.us-east-1.amazonaws.com/dev/getquotationsbyid', {headers}, options));               

  console.log("detalles:", detalles);*/

  /*const {detalles} = useGetQuotationsbyid(idem);
   
   console.log(detalles); 
  
//const idcliente = "abcdef";







/*
const handleInputChange = (event) => {
  // console.log(event.target.name)
  // console.log(event.target.value)
  setDatos({

      ...datos,
      [event.target.name] : event.target.value
  })
  
}
  
  //console.log(datos);

  const handleSubmit = (e) => {

    e.preventDefault();
    setencabezado({
      ...datos,
      destination: 'United States',
      hidden: true,
    
    })
    
    setDatos({
      country: '',
      hts: '',
      destination: 'United States',
     
    });
    
} */
  
 


