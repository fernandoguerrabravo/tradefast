import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  formControl: {
    margin: theme.spacing(3),
    minWidth: 500,
  },
  formControl2: {
    margin: theme.spacing(3),
    minWidth: 150,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

export default function RateSearch({ setencabezado }) {
  
  const classes = useStyles();

  const [datos, setDatos] = useState({

    country: '',
    hts: '',
   
   
});

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
    
}

  return (

    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
    
      <FormControl variant="outlined" className={classes.formControl}>
        <TextField
          id="origin"
          name="origin"
          label="Origin Location"
          variant="outlined"
          color="secondary"
          type = "text"
          value= {datos.hts}
          onChange={handleInputChange}
        />
      </FormControl>
     
      <FormControl variant="outlined" className={classes.formControl}>
        <TextField
          id="destination"
          name="destination"
          label="Destination Location"
          variant="outlined"
          color="secondary"
          type = "text"
          value= {datos.hts}
          onChange={handleInputChange}
        />
      </FormControl>
      
      <FormControl variant="outlined" className={classes.formControl2}>
        <TextField
          id="fob"
          name="fob"
          label="FOB Value"
          variant="outlined"
          color="secondary"
          type = "text"
          value= {datos.hts}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl2}>
        <TextField
          id="weight"
          name="weight"
          label="Weight"
          variant="outlined"
          color="secondary"
          type = "text"
          value= {datos.hts}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl2}>
        <TextField
          id="height"
          name="height"
          label="Height"
          variant="outlined"
          color="secondary"
          type = "text"
          value= {datos.hts}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl2}>
        <TextField
          id="length"
          name="length"
          label="Length"
          variant="outlined"
          color="secondary"
          type = "text"
          value= {datos.hts}
          onChange={handleInputChange}
        />
      </FormControl> <FormControl variant="outlined" className={classes.formControl2}>
        <TextField
          id="width"
          name="width"
          label="Width"
          variant="outlined"
          color="secondary"
          type = "text"
          value= {datos.hts}
          onChange={handleInputChange}
        />
      </FormControl>
      <br></br>
      <Button  variant="outlined" color="secondary">
        Send Information
      </Button>
    </form>
  );
}




