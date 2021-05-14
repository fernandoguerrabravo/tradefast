import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Fedex() {
  const classes = useStyles();

  return (
    <>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://graffica.info/wp-content/uploads/2017/06/Fedex960.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            FEDEX
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <h2>USD$ 2.350</h2>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
          Select Quotation
        </Button>
        <Button size="medium" color="secondary">
          Booking Now
        </Button>
      </CardActions>
    </Card>
    
</>
  );
}