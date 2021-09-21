import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { green, red, blue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import HtsDialogEnd from './HtsDialogEnd';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(3)
	},

	button: {
		margin: theme.spacing(1, 1, 0, 0),
		color: red[600]
	},

	color: {
		color: green[600]
	}
}));

export default function HtsGetListHts({ htschino, eventos, categorias, encabezado }) {
	const classes = useStyles();
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);
	const [helperText, setHelperText] = useState('Choose wisely');
	const [descripcion, setDescription] = useState('');

	const handleRadioChange = event => {
		setValue(event.target.value);
		setHelperText(' ');
		setError(false);
		eventos.forEach(htsCode => {
			if (htsCode.htsno === event.target.value) {
				setDescription(htsCode);
			}
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
	};

	// genero el arreglo con la info de todo lo que presentare

	// console.log("data 10 digitos :", eventos);

	return (
		<form onSubmit={handleSubmit}>
			<FormControl component="fieldset" error={error} className={classes.formControl}>
				<Typography variant="h5" className={classes.color}>
					Select Suggested US HTS{' '}
				</Typography>
				<br />
				<RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
					{eventos.map(img => (
						<FormControlLabel key={img.htsno} value={img.htsno} control={<Radio />} label={img.htsno} />
					))}
				</RadioGroup>
				<br />
				<FormHelperText>{helperText}</FormHelperText> <br />
				{value && (
					<HtsDialogEnd
						evento1={value}
						evento2={categorias}
						evento3={descripcion.description}
						evento4={encabezado}
						evento5={htschino}
					/>
				)}
				{/* value && <HtsDialogFix evento1={value} evento2={categorias} evento3={descripcion.description} evento4={encabezado} /> */}
			</FormControl>
		</form>
	);
}
