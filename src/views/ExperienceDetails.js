import destinations from '../assets/store.js'
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function ExperienceDetails() {
    const { destination, experience } = useParams();
    const classes = useStyles();

    let dest = destinations.find(d => d.match === destination);
    let exp = dest.experiences.find(e => e.match === experience);
    
    const imgadd = require(`../assets/${exp.image}`).default;

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>{exp.name}</Paper>
                </Grid>
                <Grid item xs={3}>
                <CardMedia
                    component="img"
                    height="140"
                    src={imgadd}
                />
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.paper}>{exp.description}</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default ExperienceDetails;