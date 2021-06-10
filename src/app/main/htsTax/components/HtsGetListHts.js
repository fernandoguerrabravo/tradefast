import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { green, red, blue } from '@material-ui/core/colors';
import HtsDialogEnd from './HtsDialogEnd';
import { animateVisualElement } from 'framer-motion';



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
    },

    button: {
        margin: theme.spacing(1, 1, 0, 0),
        color: red[600]

    },

    color: {

        color: blue[700],

    }
}));


export default function HtsGetListHts({ eventos, categorias, encabezado }) {

    const classes = useStyles();
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('Choose wisely');
    const [descripcion, setDescription] = useState('');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
        for (const htsCode of eventos) {
            if (htsCode.htsno == event.target.value) {
                setDescription(htsCode)
            }
        }
    };

    const handleSubmit = (event) => {

        event.preventDefault();

    };


    //console.log("data 10 digitos :", eventos);
    
    return (


        <form onSubmit={handleSubmit}>
            <FormControl component="fieldset" error={error} className={classes.formControl}>
                <FormLabel className={classes.color} component="legend">Make your HTS Selection</FormLabel><br></br>
                <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>

                    {
                        eventos.map(img => (

                            <FormControlLabel key={img.htsno} value={img.htsno} control={<Radio />} label={img.htsno} />

                        ))
                    }

                </RadioGroup>
                <br></br>
                <FormHelperText>{helperText}</FormHelperText> <br></br>
                {value && <HtsDialogEnd evento1={value} evento2={categorias} evento3 = {descripcion.description} evento4 = {encabezado.general}/>}
            </FormControl>

        </form>


    );
}

/*{

    for (const htsCode of originalJson) {
    if (htsCode.htsno.length > 12) {
      newJson.push(htsCode);
    }
  }
} */







