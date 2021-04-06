import destinations from '../assets/store.js'
import Grid from '@material-ui/core/Grid';
import ACheckoutItem from '../components/acheckoutitem'
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllItems } from '../redux/slices/basket';

function Checkout() {
    // Get selected destinations from state
    const { items } = useSelector(state => state.basket);
    // Send commands to the state
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Checkout - Add User Name Here !</h1>
            <h3>Confirm your magical get away. </h3>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
            >
                {items.map((item) => {
                    let destination = destinations.find(d => d.name === item);
                                     
                    return (
                        <Grid item xs={10} sm={6}>
                            <ACheckoutItem key={destination.id} url={destination.match} text={destination.name} image={destination.image} button_text="Remove" item={item}/>
                        </Grid>
                    )
                })}
            </Grid>

            <Button variant="contained" color="secondary" disableElevation onClick={() => dispatch(clearAllItems())}>Cancel All</Button>
            
            <Button variant="contained" color="primary">Confirm</Button>

        </div>
    );
}

export default Checkout;
