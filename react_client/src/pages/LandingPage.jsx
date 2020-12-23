import React, { useState } from 'react';
import { Button, Typography, Dialog, Paper } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import SpookifyIcon from '../components/Icons/SpookifyIcon/SpookifyIcon';
import useStyles from './styles';

const LandingPage = () => {
  const classes = useStyles();

  const [punModalOpen, setPunModalOpen] = useState(false);
  const [joke, setJoke] = useState({});

  const handleClickPunModal = () => {
    setPunModalOpen(true);
    axios
      .get('https://official-joke-api.appspot.com/jokes/random')
      .then((response) => {
        setJoke(response.data);
      });
  };
  const handleClosePunModal = () => {
    setPunModalOpen(false);
  };

  //TODO Button component refactor
  return (
    <Grid align="center" style={{ marginTop: '75px' }}>
      <SpookifyIcon height="8em" width="8em" />
      <SpookifyIcon height="9em" width="9em" />
      <SpookifyIcon height="8em" width="8em" />
      <Typography variant="h2" color="primary">
        Welcome to{' '}
        <span style={{ color: '#ff5050', fontWeight: 600 }}>Spookify</span>!
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        startIcon={<LockOpenIcon />}
      >
        Log In
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        startIcon={<PlayCircleOutlineIcon />}
      >
        Demo
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        startIcon={<PersonAddIcon />}
      >
        Register
      </Button>
      <Typography variant="h4" color="primary">
        or
      </Typography>
      <Button
        className={classes.button}
        onClick={handleClickPunModal}
        variant="contained"
        color="primary"
        startIcon={<InsertEmoticonIcon />}
      >
        Care for a joke or pun?
      </Button>

      <Dialog open={punModalOpen} onClose={handleClosePunModal}>
        <Paper style={{ padding: '25px', backgroundColor: '#8D99AE' }}>
          <Typography style={{ textAlign: 'center' }}>{joke.setup}</Typography>
          <Typography style={{ textAlign: 'center', fontWeight: 'bold' }}>
            {joke.punchline}
          </Typography>
        </Paper>
      </Dialog>
    </Grid>
  );
  //TODO Modal Refactor
};

export default LandingPage;
