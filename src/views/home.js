import destinations from '../assets/store.js'
import ACard from '../components/acard'
import Grid from '@material-ui/core/Grid';

function DestinationDetails() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
            {destinations.map((destination) => (
                <ACard key={destination.id} url={destination.address} text={destination.name} image={destination.image} desc={destination.description} />
            ))}
        </Grid>
      </div>
    );
}

export default DestinationDetails;
