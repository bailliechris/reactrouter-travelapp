import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import IconButton from '@material-ui/core/IconButton';
import AButton from './abutton';
//import MenuIcon from '@material-ui/icons/Menu';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//import AMenu from './amenu';

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
  },
  checkoutButton: {
    color:'white'
  }
}));

function TheAppBar({nav, onClick}) {
  const classes = useStyles();
//  console.table(nav);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="regular">
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
          <Link to="/basket">
            <Typography className={classes.title} align="right" color="inherit">
              Checkout
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TheAppBar;