import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { green, red, blue } from '@material-ui/core/colors';
import FormControl from '@material-ui/core/FormControl';
import swal from 'sweetalert';
import Select from 'react-select';
import UseGetSku from 'app/main/hooks/UseGetSku';
import SaveClasHts from '../helpers/SaveClasHts';

const styles = theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(2)
	},

	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
	}
});

const useStyles = makeStyles(theme => ({
	margin: theme.spacing(3),
	minWidth: 500,
	color: {
		color: blue[700]
	},
	color1: {
		color: green[500]
	},

	formControl: {
		margin: theme.spacing(1),
		minWidth: 30
	}
}));

const DialogTitle = withStyles(styles)(props => {
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

const DialogContent = withStyles(theme => ({
	root: {
		padding: theme.spacing(2)
	}
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(1)
	}
}))(MuiDialogActions);

export default function HtsDialogEnd({ evento1, evento2, evento3, evento4 }) {
	const idcliente = 'abcdef';
	const sku = UseGetSku(idcliente);
	const skufinal = sku.data;
	const newJson1 = [];
	skufinal.forEach(codigo => {
		newJson1.push({
			value: codigo.sku,
			label: codigo.sku
		});
	});

	// para manejar los eventos de las dos cajas de texto
	const history = useHistory();

	const [datos, setDatos] = useState({
		sku: '',
		shortdescription: ''
	});

	const fecha = new Date();
	const date = fecha.toLocaleDateString();

	const [saveclashts, setSaveclashts] = useState({
		categories: evento2,
		hts8: evento4.hts8,
		duties: evento4.general,
		special: evento4.special,
		country: evento4.country,
		destination: evento4.destination,
		description: evento3,
		hts: evento1,
		dutiesrate: evento4.duties,
		dutiespecific: evento4.dutiespecific,
		date
	});

	const handleInputChange = event => {
		// console.log(event.target.name)
		// console.log(event.target.value)
		skufinal.forEach(key => {
			if (key.sku === event.value) {
				setDatos({
					sku: event.value,
					shortdescription: key.shortdescription
				});
			}
		});
	};

	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		if (datos.sku === '') {
			swal({
				title: 'oops!',
				text: 'Please select your SKU!',
				icon: 'warning'
			});
		} else {
			SaveClasHts(saveclashts, datos.sku);
			setOpen(true);
		}
	};

	const handleClose = () => {
		setOpen(false);
		history.push('/htstaxlist');
	};

	return (
		<>
			<Typography>Input Products References</Typography>
			<FormControl className={classes.formControl}>
				<Select options={newJson1} onChange={handleInputChange} />
				<Typography className={classes.titles} style={{ color: red[400] }} variant="caption" gutterBottom>
					<strong>Search Your Saved SKU Code</strong>
				</Typography>
			</FormControl>

			<FormControl className={classes.formControl}>
				<Button type="submit" variant="outlined" color="primary" onClick={handleClickOpen}>
					Save Classification
				</Button>
			</FormControl>

			<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
				<DialogTitle className={classes.color} id="customized-dialog-title" onClose={handleClose}>
					HTS : {evento1}
				</DialogTitle>
				<DialogContent dividers>
					<Typography gutterBottom>
						<ListItem className={classes.color}>Customer References: </ListItem>
						<ListItem>
							<span className={classes.color1}>SKU:</span>&nbsp;{datos.sku}
						</ListItem>
						<ListItem>
							<span className={classes.color1}>Short Description:</span>&nbsp;{datos.shortdescription}
						</ListItem>
					</Typography>
					<Typography gutterBottom>
						<ListItem className={classes.color}>Categories: </ListItem>
						<ListItem>{evento2.L0}</ListItem>
						<ListItem>{evento2.L1}</ListItem>
						<ListItem>{evento2.L2}</ListItem>
						<ListItem>{evento2.L3}</ListItem>
					</Typography>
					<Typography gutterBottom>
						<ListItem className={classes.color}>Description: </ListItem>
						<ListItem>{evento3} </ListItem>
					</Typography>
					<Typography gutterBottom>
						<ListItem className={classes.color}>Import Taxes (Duties): </ListItem>
						<ListItem>{evento4.general}</ListItem>
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose} color="primary">
						Close Details
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
