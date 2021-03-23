import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
//import DestinationDetails from '../views/DestinationDetails';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  

const AButton = ({url, text, onClick}) => {
    const classes = useStyles();  

    return (
        <div className={classes.root}>
            <Link to={url}>
                <Button color="inherit" variant="outlined" onClick={()=>onClick(url)}>{text}</Button>
            </Link>
        </div>
    )
}

export default AButton;