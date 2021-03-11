import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
//import DestinationDetails from '../views/DestinationDetails';

const AButton = ({item, onClick}) => {
    return (
        <div>
            <Link to={item.url}>
                <Button color="inherit" variant="contained" onClick={()=>onClick(item.url)}>{item.name}</Button>
            </Link>
        </div>
    )
}

export default AButton;