import React, { useState } from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import InputAdornment from '@material-ui/core/InputAdornment';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';
import setJwtToken from '../../utils/setJwtToken';
import { logout } from '../../redux/actions/userActions';
import { Button, Typography } from '@material-ui/core';

const SideBar = ({ currentUser, dispatchLogout }) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log(`Search term is ${searchTerm}`); //TODO
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setJwtToken(false);
    dispatchLogout();
    window.location.href = '/';
  };

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />

      <Typography style={{ marginTop: 10, textAlign: 'center' }}>
        Hello, {currentUser.username}!
      </Typography>

      <Button
        onClick={handleLogout}
        className={classes.button}
        style={{ margin: 10 }}
      >
        Log Out
      </Button>

      <Divider />

      <List>
        <ListItem>
          <TextField
            label="Search"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            variant="outlined"
            InputLabelProps={{
              style: { color: 'black' },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className={classes.icons} />
                </InputAdornment>
              ),
            }}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FavoriteIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Liked Songs" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LibraryMusicIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Your Playlists" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MusicNoteIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="New Playlist" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
