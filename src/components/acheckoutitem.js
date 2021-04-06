import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/slices/basket';

const useStyles = makeStyles({
    root: {
     maxWidth: 800,
     align: "center"
    },
  });

const ACheckoutItem = ({ url, text, image, button_text, item }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const imgadd = require(`../assets/${image}`).default;

    return (
      <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              src={imgadd}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {text}
              </Typography>
            </CardContent>
          </CardActionArea>
        <CardActions>
            <Button color="Secondary" variant="contained" size="small" onClick={()=>dispatch(removeItem(item))}>
                {button_text}
            </Button>                
        </CardActions>
      </Card>

    )
}

export default ACheckoutItem;