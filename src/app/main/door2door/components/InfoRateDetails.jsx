import React, { useEffect, useState, FC, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { IfFulfilled, IfPending, IfRejected, PromiseFn, useAsync } from 'react-async';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import MaterialTable, { MTableToolbar } from 'material-table';
import { green, red, blue } from '@material-ui/core/colors';
/* const useStyles = makeStyles((theme) => ({

  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  formControl: {
    margin: theme.spacing(2),
    minWidth: 400,
    padding: '50px 50px 0px 0px',
  },

}));*/

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

const columnas = [
	{
		title: 'Quantity',
		field: 'qtybox'
	},

	{
		title: 'Unit Weight (Kg)',
		field: 'weight'
	},
	{
		title: 'Width (cm)',
		field: 'width'
	},
	{
		title: 'Length (cm)',
		field: 'length'
	},
	{
		title: 'Height (cm)',
		field: 'height'
	},
	{
		title: 'Total Weight (Kg)',
		field: 'weightbox'
	},
	{
		title: 'Total Volume (M3)',
		field: 'volbox'
	},
	{
		title: 'FBA',
		field: 'fba'
	}
];

const columnas2 = [
	{
		title: 'SKU',
		field: 'sku'
	},

	{
		title: 'Quantity',
		field: 'qty'
	},

	{
		title: 'Unit Value (USD)',
		field: 'fob'
	},
	{
		title: 'Commodity',
		field: 'shortdescription'
	},
	{
		title: 'HTS Classification',
		field: 'hts8'
	},
	{
		title: 'Duties Rate',
		field: 'duties'
	}
];

const getDetails = async ({ event }) => {
	return event;
};

const DetailsPreview = ({ event }) => {
	const classes = useStyles();
	const state = useAsync({ promiseFn: getDetails, event });

	return (
		<>
			<IfPending state={state}>
				<strong>Loading...</strong>
			</IfPending>
			<IfRejected state={state}>{error => `Something went wrong: ${error.message}`}</IfRejected>
			<IfFulfilled state={state}>
				{data => (
					<div>
						<Grid container spacing={3}>
							<Grid item xs={4}>
								<Paper className={classes.paper}>
									<List component="nav" aria-label="main mailbox folders">
										<ListItem>
											<ListItemIcon>
												<InboxIcon />
											</ListItemIcon>
											<ListItemText style={{ color: green[800] }} primary="Origin Address" />
											<br />
										</ListItem>
										<ListItem>
											{event.origen.number} {event.origen.address_1} {event.origen.address_2}{' '}
											{event.origen.ciudad}, {event.origen.estado}, {event.origen.zipCode},{' '}
											{event.origen.country}
										</ListItem>
										<ListItem>
											<p />
										</ListItem>

										<ListItem>
											<p />
										</ListItem>
										<ListItem>
											<p />
										</ListItem>
									</List>
									<Divider />
									<List component="nav" aria-label="main mailbox folders">
										<ListItem>
											<ListItemIcon>
												<InboxIcon />
											</ListItemIcon>
											<ListItemText style={{ color: green[800] }} primary="Shipping Summary" />
											<p />
										</ListItem>
										<ListItem>
											<Typography color="primary">
												Total FOB USD$ :&nbsp;&nbsp;{event.skus.totalfob}{' '}
											</Typography>
											<Typography />
											<br />
										</ListItem>
										<ListItem>
											<Typography color="primary">
												Total SKU :&nbsp;&nbsp;{event.skus.totalsku}
											</Typography>
											<Typography />
											<br />
										</ListItem>

										<ListItem>
											<Typography color="primary">
												Total Duties $USD:&nbsp;&nbsp; {event.skus.totalduties.toFixed(2)}
											</Typography>
											<Typography />
											<p />
										</ListItem>
										<ListItem>
											<Typography color="primary">
												Other Duties $USD:&nbsp;&nbsp; {event.skus.totalotherduties.toFixed(2)}
											</Typography>
											<Typography />
											<p />
										</ListItem>
										<p />
										<Divider />
										<p />
										<ListItem>
											<Typography color="primary">
												Total Boxes:&nbsp;&nbsp;{event.boxes.totalqty}
											</Typography>
											<Typography />
											<p />
										</ListItem>
										<ListItem>
											<Typography color="primary">
												Total KG:&nbsp;&nbsp;{event.boxes.totalkg}
											</Typography>
											<p />
										</ListItem>
										<ListItem>
											<Typography color="primary">
												Total Vol (M3):&nbsp;&nbsp;{event.boxes.totalvol}
											</Typography>
											<p />
										</ListItem>
										<ListItem>
											<Typography color="secondary" />
										</ListItem>
										<ListItem>
											<Typography color="secondary" />
										</ListItem>
										<ListItem>
											<Typography color="secondary" />
										</ListItem>
										<p />
									</List>
								</Paper>
							</Grid>
							<Grid item xs={8}>
								<>
									<MaterialTable
										columns={columnas}
										data={event.boxes.arreglosdebox}
										options={{
											search: false
										}}
										// actions={actions}
										title="Packages Details"
									/>
									<br />
									<Divider />
									<br />
									{
										<MaterialTable
											columns={columnas2}
											data={event.skus.arreglosdelsku}
											options={{
												search: false
											}}
											// actions={actions}
											title="SKU Details"
										/>
									}
								</>
							</Grid>
						</Grid>
					</div>
				)}
			</IfFulfilled>
		</>
	);
};

export default function InfoRateDetails({ event }) {
	return (
		<div>
			<DetailsPreview event={event} />
		</div>
	);
}
