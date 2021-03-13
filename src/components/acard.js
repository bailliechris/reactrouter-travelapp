import {Link} from "react-router-dom";
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
     align: "center"
    },
  });

const ACard = ({url, text, image, desc}) => {
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
            <Typography variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Link to={url}>
                <Button color="primary" variant="contained" size="small" >
                Find out more...
                </Button>                
            </Link>
        </CardActions>
      </Card>

    )
}

export default ACard;