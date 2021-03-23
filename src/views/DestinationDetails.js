import {useParams} from "react-router-dom"
import destinations from '../assets/store.js'
import Grid from '@material-ui/core/Grid';
import ACard from '../components/acard'

function DestinationDetails() {
    const {destination} = useParams();

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
                {dest.experiences.map((exp) => (
                    <ACard key={exp.name} url={exp.match} text={exp.name} image={exp.image} />
                ))}
            </Grid>

        </div>
    );
}

export default DestinationDetails;
