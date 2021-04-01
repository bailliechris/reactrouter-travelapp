import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AButton from './abutton'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useDispatch } from "react-redux";
import { addNumber } from '../redux/actions/actions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    color:'white'
  }
}));

function TheAppBar({nav, onClick}) {
  const classes = useStyles();
  const dispatch = useDispatch();
//  console.table(nav);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
            </IconButton>
          <Link to="/">
            <Typography className={classes.title} align="center" color="inherit">
              Travel App
            </Typography>
          </Link>
          <ButtonGroup variant="text" color="inherit" size="medium" aria-label="text primary button group">
            {nav.map((item) => (
                <AButton key={item.id} url={item.address} text={item.name} onClick={onClick} />
            ))}
          </ButtonGroup>
          <Button variant="contained" color="primary" disableElevation onClick={() => dispatch(addNumber(5))}></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TheAppBar;