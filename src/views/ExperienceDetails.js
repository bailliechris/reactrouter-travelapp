import destinations from '../assets/store.js'
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
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
            <Paper className={classes.paper}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {exp.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                    <CardMedia
                        component="img"
                        height="140"
                        src={imgadd}
                    />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {exp.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default ExperienceDetails;