import '../App.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
});

function Header({title}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h3" gutterBottom>
                {title}
            </Typography>
            <Divider />
        </div>
    );
}

export default Header;
