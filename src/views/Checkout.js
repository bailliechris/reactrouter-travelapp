import destinations from '../assets/store.js'
import Grid from '@material-ui/core/Grid';
import ACard from '../components/acard'
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/slices/basket';

function Checkout() {
    // Get selected destinations from state
    const { items } = useSelector(state => state.items);
    // Send commands to the state
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Checkout - Add User Name Here !</h1>
            <h3>Confirm your magical get away. </h3>
            <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="flex-start"
            >
                {items.map((item) => {
                    let destination = destinations.find(d => d.name === item);
                    let destURL = dispatch(removeItem(item));
                 
                    return (
                        <ACard key={destination.id} url={destURL} text={destination.name} image={destination.image} button_text="Remove"/>
                    )
                })}
            </Grid>
            
            <Button variant="contained" color="primary">Confirm</Button>

        </div>
    );
}

export default Checkout;
