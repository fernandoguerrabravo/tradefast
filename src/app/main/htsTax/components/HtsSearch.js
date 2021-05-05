
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
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

export default function SearchTax({ setencabezado }) {
  
  const classes = useStyles();

  const [datos, setDatos] = useState({

    country: '',
    hts: '',
    hidden: true,
   
});

const handleInputChange = (event) => {
  // console.log(event.target.name)
  // console.log(event.target.value)
  setDatos({

      ...datos,
      [event.target.name] : event.target.value
  })
  
}
  
  console.log(datos);

  const handleSubmit = (e) => {

    e.preventDefault();
    setencabezado({
      ...datos,
      destination: 'United States'
    
    })
    
    setDatos({
      country: '',
      hts: '',
      destination: 'United States'
    });
    
}

  return (

    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Origin Country</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="country"
          value = {datos.country}
          onChange={handleInputChange}
          label="Origin Country"
          name='country'
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={1}>Brazil</MenuItem>
          <MenuItem value={2}>Colombia</MenuItem>
          <MenuItem value={3}>Mexico</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <TextField
          id="hts"
          name="hts"
          label="HTS Code (6 Digits)"
          variant="outlined"
          color="secondary"
          value= {datos.hts}
          onChange={handleInputChange}
        />
      </FormControl>
      <br></br>
      <Button type="submit" variant="outlined" color="secondary">
        Search
      </Button>
    </form>
  );
}




