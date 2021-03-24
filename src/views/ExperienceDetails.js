//import destinations from '../assets/store.js'
import {useParams} from "react-router-dom"

function ExperienceDetails() {
    const { experience } = useParams();
    
    return (
        <h1> Requested experience information: {experience} </h1>
    )
}

export default ExperienceDetails;