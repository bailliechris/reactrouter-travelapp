import {useParams} from "react-router-dom"
import destinations from '../assets/store.js'

function DestinationDetails() {
    const {destination} = useParams();

    let dest = destinations.find(d => d.match === destination);
    console.log(dest);

    return (
        <div className="App">
            <h1>Visit - {dest.name} !</h1>
            <h3>{dest.description} </h3>
        </div>
    );
}

export default DestinationDetails;
