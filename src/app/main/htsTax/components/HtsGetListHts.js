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
import CustomizedDialogs from './HtsDialogEnd';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
        color : red[600]
       
    },
    color: {

        color : blue[700],
        
    }
}));

export default function HtsGetListHts({eventos , categorias}) {

    const classes = useStyles();
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('Choose wisely');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        
       
        event.preventDefault();
        
        if (value === 'best') {
            setHelperText('You got it!');
            setError(false);
        } else if (value === 'worst') {
            setHelperText('Sorry, wrong answer!');
            setError(true);
        } else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };
    console.log("AQUI ESTA LA CAGA:");
    console.log(categorias);
    const originalJson = eventos;
    const newJson = [];
    return (

        <form onSubmit={handleSubmit}>
            <FormControl component="fieldset" error={error} className={classes.formControl}>
                <FormLabel className={classes.color} component="legend">Make your HTS Selection</FormLabel><br></br>
                <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>

                    {
                        originalJson.map(img => (
                            
                            <FormControlLabel key={img.htsno} value={img.htsno} control={<Radio />} label= {img.htsno}  />

                        ))
                    }

                </RadioGroup>
                <br></br>
                <FormHelperText>{helperText}</FormHelperText> <br></br>
                <Button type="submit" variant="outlined"  className={classes.button}>
                   Save Your Selection
        </Button>
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