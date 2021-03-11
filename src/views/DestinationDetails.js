import {useParams} from "react-router-dom"
import nav from '../assets/store'

function DestinationDetails() {
    const {url} = useParams();

    let data = nav.slice();
    let dest;

    if(url!== '')
    {
        dest = data.filter(d => d.url = url);
    }
    else {
        dest = {
            name: "None",
            description: "Nothing yet"
        }
    }

    return (
        <div className="App">
            <h1>{dest.name} </h1>
            <h3>{dest.description} </h3>
        </div>
    );
}

export default DestinationDetails;
