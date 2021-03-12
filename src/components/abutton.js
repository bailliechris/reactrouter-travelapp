import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
//import DestinationDetails from '../views/DestinationDetails';

const AButton = ({url, text, onClick}) => {
    return (
            <Link to={url}>
                <Button color="primary" variant="contained" onClick={()=>onClick(url)}>{text}</Button>
            </Link>
    )
}

export default AButton;