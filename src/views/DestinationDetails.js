import { useParams, useRouteMatch, Switch, Route } from "react-router-dom"
import destinations from '../assets/store.js'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ACard from '../components/acard'
import ExperienceDetails from './ExperienceDetails'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/basket';

function DestinationDetails() {
    const { destination } = useParams();
    let { url, path } = useRouteMatch();
    const dispatch = useDispatch();

    let dest = destinations.find(d => d.match === destination);

    return (
        <div className="App">
            <h1>Visit - {dest.name} !</h1>
            <h3>{dest.description} </h3>
            <Button variant="contained" color="primary" onClick={() => dispatch(addItem(dest.name))}>Book</Button>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >
                
                {dest.experiences.map((exp) => {
                    let newURL = url + "/" + exp.match;
                    
                    return (
                        <ACard key={exp.name} url={newURL} text={exp.name} image={exp.image} button_text="Find out more..." />
                    )
                })}
            </Grid>

            <Switch>
                <Route exact path={path}>
                    <h3>Select an experience to find out more.</h3>
                </Route>
                <Route path={`${path}/:experience`}>
                    <ExperienceDetails />
                </Route>        
            </Switch>

        </div>
    );
}

export default DestinationDetails;
