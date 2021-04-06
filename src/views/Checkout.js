import destinations from '../assets/store.js'
import Grid from '@material-ui/core/Grid';
import ACard from '../components/acard'
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearAllItems } from '../redux/slices/basket';

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
                direction="column"
                justify="center"
                alignItems="center"
            >
                {items.map((item) => {
                    let destination = destinations.find(d => d.name === item);
                                     
                    return (
                        <div>
                            <ACard key={destination.id} url={destination.match} text={destination.name} image={destination.image} button_text="Remove"/>
                            <Button variant="contained" color="secondary" onClick={()=>dispatch(removeItem(item))}>Remove</Button>
                        </div>
                    )
                })}
            </Grid>

            <Button variant="contained" color="secondary" disableElevation onClick={() => dispatch(clearAllItems())}>Cancel All</Button>
            
            <Button variant="contained" color="primary">Confirm</Button>

        </div>
    );
}

export default Checkout;
