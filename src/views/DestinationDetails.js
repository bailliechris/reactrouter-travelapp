import {Route, Switch, useParams, useRouteMatch, useLocation} from "react-router-dom"
import destinations from '../assets/store.js'
import Grid from '@material-ui/core/Grid';
import ACard from '../components/acard'
import ExperienceDetails from './ExperienceDetails'

function DestinationDetails() {
    const { destination } = useParams();

    let match = useRouteMatch();
    let current = useLocation();
    let dest = destinations.find(d => d.match === destination);
    console.log(dest);

    return (
        <div className="App">
            <h1>Visit - {dest.name} !</h1>
            <h3>{dest.description} </h3>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >
                
                {dest.experiences.map((exp) => {
                    let newURL = current.pathname + "/"+ exp.match;
                    
                    return (
                        <ACard key={exp.name} url={newURL} text={exp.name} image={exp.image} />
                    )
                })}
            </Grid>

            <Switch>
                <Route path={`${match.path}/:experience`}>
                    <ExperienceDetails />
                </Route>
                <Route path={match.path}>
                    <h3>Choose a experience to find out more!</h3>
                </Route>
            </Switch>

        </div>
    );
}

export default DestinationDetails;
