import Button from '@material-ui/core/Button';

const AButton = ({item, onClick}) => {
    return (
        <Button variant="contained" onClick={()=>onClick(item.id)}>{item.text}</Button>
    )
}

export default AButton;