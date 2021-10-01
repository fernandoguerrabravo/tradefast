import * as React from 'react';
import Box from '@material-ui/core/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { green, red, blue, orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import SkutipobultoMx from './SkutipobultoMx';
import SkuDetailsMx from './SkuDetailsMx';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		display: 'flex-grow',
		alignItems: 'center',
		width: '100%',
		margin: theme.spacing(0),
		padding: theme.spacing(1),
		input: {
			marginLeft: theme.spacing(1),
			flex: 1
		},
		iconButton: {
			padding: 10
		},
		divider: {
			height: 28,
			margin: 4
		}
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 400
	},
	formControl2: {
		margin: theme.spacing(1),
		minWidth: 300,
		padding: theme.spacing(1)
	},
	selectEmpty: {
		marginTop: theme.spacing(1)
	},
	titles: {
		alignItems: 'left',
		flexGrow: 1,
		display: 'flex-grow',
		textAlign: 'left',
		padding: theme.spacing(1)
	},

	paper: {
		color: theme.palette.text.secondary,
		padding: theme.spacing(3),
		flexGrow: 1
	},

	icons: {
		fontSize: 'small',
		backgroundColor: red[500],
		color: red[500]
	},

	table: {
		minWidth: 200
	},
	paper1: {
		float: 'center',
		display: 'flex-grow',
		padding: theme.spacing(2),
		alignItems: 'center',
		flexGrow: 1,
		textAlign: 'center'
	},
	button: {
		margin: theme.spacing(1),
		color: blue[50]
	}
}));
const steps = [
	{
		label: 'Select Freight Packaging',
		description: ``
	},
	{
		label: 'Create an ad group',
		description: 'An ad group contains one or more ads which target a shared set of keywords.'
	},
	{
		label: 'Create an ad',
		description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`
	}
];

export default function MxRates() {
	const classes = useStyles();

	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ maxWidth: 400 }}>
			<Stepper activeStep={activeStep} orientation="vertical">
				<Step>
					<StepLabel>Select Freight Packaging</StepLabel>
					<StepContent>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									<SkutipobultoMx />
									<p />
									<p />
									<Box sx={{ mb: 2 }}>
										<Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
											Continue
										</Button>
									</Box>
								</Paper>
							</Grid>
						</Grid>
						<Typography />
					</StepContent>
				</Step>
				<Step>
					<StepLabel>Select Freight Packaging</StepLabel>
					<StepContent>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									<SkuDetailsMx />
									<p />
									<p />
									<Box sx={{ mb: 2 }}>
										<Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
											Continue
										</Button>
										<Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
											Back
										</Button>
									</Box>
								</Paper>
							</Grid>
						</Grid>
						<Typography />
					</StepContent>
				</Step>
				<Step>
					<StepLabel>Shippping Details</StepLabel>
					<StepContent>
						<Typography />
						<Box sx={{ mb: 2 }}>
							<div>
								<Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
									Continue
								</Button>
								<Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
									Back
								</Button>
							</div>
						</Box>
					</StepContent>
				</Step>
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={0} sx={{ p: 3 }}>
					<Typography>All steps completed - you&apos;re finished</Typography>
					<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
						Reset
					</Button>
				</Paper>
			)}
		</Box>
	);
}
