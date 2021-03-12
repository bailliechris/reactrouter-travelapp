import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
//import DestinationDetails from '../views/DestinationDetails';

const AButton = ({url, text, onClick}) => {
    return (
        <div>
            <Link to={url}>
                <Button color="inherit" variant="contained" onClick={()=>onClick(url)}>{text}</Button>
            </Link>
        </div>
    )
}

export default AButton;