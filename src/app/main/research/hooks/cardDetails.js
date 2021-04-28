import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BasicTable from './tableDetail';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(event) {

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(event.event.imagen);

  return (
    <Card className={classes.root}>
      <CardHeader
       /* avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }  */
       /* action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        } */
        title= ""
        subheader={event.event.title}
      />
      <CardMedia
        className={classes.media}
        image= {event.event.imagen}
        title=""
      />
      <CardContent>
       
        
        <BasicTable details={event}></BasicTable>
       
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>Features:</Typography>
          <ol>
            <li> {event.event.feature_0}</li><br></br>
            <li> {event.event.feature_1}</li><br></br>
            <li> {event.event.feature_2}</li><br></br>
            <li> {event.event.feature_3}</li><br></br>
          </ol>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <Typography paragraph>Product Description:</Typography>
          <Typography paragraph>
          {event.event.description}
          </Typography>
          <Typography paragraph>
          
          </Typography>
          <Typography paragraph>
           
          </Typography>
          <Typography>
           
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}