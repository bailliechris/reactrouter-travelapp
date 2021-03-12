import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AButton from './abutton'
import ButtonGroup from '@material-ui/core/ButtonGroup';


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
}));

function TheAppBar({nav, onClick}) {
  const classes = useStyles();
//  console.table(nav);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
          </IconButton>
          <ButtonGroup variant="text" color="inherit" size="large" aria-label="text primary button group">
            {nav.map((item) => (
                <AButton key={item.id} url={item.address} text={item.name} onClick={onClick} />
            ))}
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TheAppBar;