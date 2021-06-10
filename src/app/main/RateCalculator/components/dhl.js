import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function DHL() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.publimark.cl/media/k2/items/cache/08b282bed88832c9197a25b1ea22b623_XL.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           DHL
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <h2>USD$ 2.890</h2> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button size="medium" color="primary">
          Booking Now
        </Button>
        <Button size="medium" color="secondary">
          Connect Your Own Acocunt
        </Button>
      </CardActions>
    </Card>
  );
}