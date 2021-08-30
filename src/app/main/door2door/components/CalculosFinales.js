import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import Paper from '@material-ui/core/Paper';
import { green, red, blue } from '@material-ui/core/colors';
import { Divider, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import UseGetRatesBrLcl from '../hooks/UseGetRatesBrLcl';
import UseGetCustomsusa from '../hooks/UseGetCustomusa';
import UseGetLastmileibc from '../hooks/UseGetLastmileibc';

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
		//margin: theme.spacing(1),
		minWidth: 400
	},
	formControl2: {
		minWidth: 25,
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
		padding: theme.spacing(1),
		color: theme.palette.text.secondary
	},

	icons: {
		fontSize: 'small',
		backgroundColor: red[500],
		color: red[500]
	},

	table: {
		minWidth: 200
	},
	media: {
		height: 140
	}
}));

const listabox = [];

export default function CalculosFinales({ datosfinales }) {
	console.log('PERRO QLIO:', datosfinales);
	const idcliente = 'abcdef';
	const classes = useStyles();
	const lclrate = UseGetRatesBrLcl(datosfinales);
	const lclratefinal = lclrate.data;
	const customusa = UseGetCustomsusa(datosfinales);
	const customusafinal = customusa.data;
	const lastmileibc = UseGetLastmileibc(datosfinales);
	const lastmileibcfinal = lastmileibc.data;

	console.log('ultima milla ibc ', lastmileibcfinal);
	console.log('expo brazil ', lclratefinal);
	console.log('customsusa ', customusafinal);

	function onKeyDown(keyEvent) {
		if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
			keyEvent.preventDefault();
		}
	}

	const submitsku = () => {
		swal({
			title: 'Good Job',
			text: 'Your Quotation was Saved',
			icon: 'success'
		});
	};

	return (
		<form onKeyDown={onKeyDown} noValidate autoComplete="off">
			<br />
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography className={classes.titles} variant="h6" gutterBottom>
						Door to Door Shipment Summary
					</Typography>
					<Divider />
				</Grid>
				<Grid item xs={5}>
					<Card className={classes.paper}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="https://static.eclprojects.net/logos/ecl.jpg"
								title="eclprojects"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Total Shipping US {lclratefinal} {customusafinal} {lastmileibcfinal} (Sea Modal)
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button onClick={submitsku} size="small" color="primary">
								Save Quotation
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={5}>
					<Card className={classes.paper}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="https://www.publimark.cl/media/k2/items/cache/08b282bed88832c9197a25b1ea22b623_XL.jpg"
								title="eclprojects"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Total Shipping US$2.500
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Save Quotation
							</Button>
							<Button size="small" color="primary">
								Connect your Own DHL's Account
							</Button>
						</CardActions>
					</Card>
				</Grid>
				{/* <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <TextField
                                id="qtybox"
                                name="qtybox"
                                label="Quantities of Box"
                                variant="outlined"
                                color="secondary"
                                type="number"
                                value={box.qtybox || ''}
                                onChange={handleqtyChange}
                            />
                            <Typography className={classes.titles} style={{ color: blue[400] }} variant="caption" gutterBottom>
                                (*) Qty. one type of box
                            </Typography>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <TextField
                                id="weight"
                                name="weight"
                                label="Weight (Kg)"
                                variant="outlined"
                                color="secondary"
                                type="number"
                                value={box.weight || ''}
                                onChange={handleqtyChange}
                            />
                            <Typography className={classes.titles} style={{ color: blue[400] }} variant="caption" gutterBottom>
                                (*) Unit for each Box
                            </Typography>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <TextField
                                id="width"
                                name="width"
                                label="Width (cm)"
                                variant="outlined"
                                color="secondary"
                                type="number"
                                value={box.width || ''}
                                onChange={handleqtyChange}
                            />
                            <Typography className={classes.titles} style={{ color: blue[400] }} variant="caption" gutterBottom>
                                (*) Unit for each Box
                            </Typography>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <TextField
                                id="length"
                                name="length"
                                label="Length (cm)"
                                variant="outlined"
                                color="secondary"
                                type="number"
                                value={box.length || ''}
                                onChange={handleqtyChange}
                            />
                            <Typography className={classes.titles} style={{ color: blue[400] }} variant="caption" gutterBottom>
                                (*) Unit for each Box
                            </Typography>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <TextField
                                id="height"
                                name="height"
                                label="Height (cm)"
                                variant="outlined"
                                color="secondary"
                                type="number"
                                value={box.height || ''}
                                onChange={handleqtyChange}
                            />
                            <Typography className={classes.titles} style={{ color: blue[400] }} variant="caption" gutterBottom>
                                (*) Unit for each Box
                            </Typography>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl2}>
                            <Button onClick={submitsku} variant="contained" color="secondary">+ Add Item to List</Button>
                        </FormControl>
                    </Paper><br></br>
                </Grid> */}
				{/* <Grid item xs={12}>
                    <BoxComponentList event={arreglobox.arreglosdebox} />
            </Grid> */}
			</Grid>
		</form>
	);
}
