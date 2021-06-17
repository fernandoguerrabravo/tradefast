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
import { animateVisualElement } from 'framer-motion';
import Typography from '@material-ui/core/Typography';
import { useGetSkuHts } from '../hooks/useGetSkuHts';



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
    },

    button: {

        margin: theme.spacing(1, 1, 0, 0),
        color: red[600]

    },

    color: {

        color: green[600],

    }
}));


export default function HtsSku(event) {


    const clasificaciones = useGetSkuHts(event)
    const clas = clasificaciones.data
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('Choose wisely');
    const [descripcion, setDescription] = useState('');

    const handleRadioChange = (event) => {

        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
        /*for (const htsCode of eventos) {
            if (htsCode.htsno == event.target.value) {
                setDescription(htsCode)
            }
        }*/
    };

    const handleSubmit = (event) => {

        event.preventDefault();

    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl component="fieldset" error={error} className={classes.formControl}>
                <Typography variant="h5" className={classes.color}>Select Suggested US HTS </Typography><br></br>
                <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>

                    {
                        clas.map(img => (

                            <FormControlLabel key={img.hts8} value={img.hts8} control={<Radio />} label={img.hts8 + img.brief_description} />

                        ))
                    }
                </RadioGroup>
                <br></br>
                <FormHelperText>{helperText}</FormHelperText> <br></br>
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







