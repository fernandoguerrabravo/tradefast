import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { memo } from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';
import RightSideLayout1 from './RightSideLayout1';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
function FooterLayout1(props) {

	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'default',
			color: theme.palette.text.secondary,
		},
	}));
	const classes = useStyles();
	const footerTheme = useSelector(selectFooterTheme);

	return (
		<ThemeProvider theme={footerTheme}>
			<AppBar
				id="fuse-footer"
				className={clsx('relative z-20 shadow-md', props.className)}
				color="default"
				style={{ backgroundColor: footerTheme.palette.background.paper }}
			>
				<Toolbar className="min-h-48 md:min-h-64 px-8 sm:px-12 py-0 flex items-center overflow-x-auto">

					<div className={classes.root}>
						<Grid container spacing={3}>
							<Grid item xs={8}>
								<Typography>Copyright @2021 Ecommerce Logistics LLC</Typography>
							</Grid>
							<Grid item xs={2} >
								<img width="120" height="120" src="https://static.eclprojects.net/logos/ecl-logo-transparent-light.svg" />
							</Grid>
							<Grid item xs={2} >
							Partner of
								<img width="120" height="120" src="https://static.tradefast.io/amazon-spn.png" />
							</Grid>
						</Grid>
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default memo(FooterLayout1);
