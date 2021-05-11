import react, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { green, red , blue} from '@material-ui/core/colors';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import FlightLand from '@material-ui/icons/FlightLand';
import MenuBook from '@material-ui/icons/MenuBook';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },


}));

export default function HtsHeader({event, codigos}) {

    const classes = useStyles();
   // console.log(event.event.country)
   console.log("ESTA SI CTM QLOA DE MIERDA:");
   console.log(codigos);
   
    return (
        <>
       
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar style={{ backgroundColor: green[500] }}>
                        <FlightTakeoff />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Origin Country" secondary= {event.country} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar style={{ backgroundColor: red[500] }}>
                        <FlightLand />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Destination Country" secondary={event.destination} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar style={{ backgroundColor: blue[500] }}>
                        <MenuBook />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="HTS Code" secondary={event.hts} />
            </ListItem>
        </List>
       <br></br>
        
        </>

    );
}