import React, { useState } from 'react';
import { Button, Typography, CircularProgress } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import SpookifyIcon from '../components/Icons/SpookifyIcon/SpookifyIcon';
import Modal from '../components/Modals/ModalBackdrop/Modal';
import useStyles from './styles';
import LoginForm from '../components/Modals/LoginForm/LoginForm';
import RegisterForm from '../components/Modals/RegisterForm/RegisterForm';

const LandingPage = () => {
  const classes = useStyles();

  const [punModalOpen, setPunModalOpen] = useState(false);
  const [punModalLoading, setPunModalLoading] = useState(false);
  const [joke, setJoke] = useState({});

  const handleClickPunModal = () => {
    setPunModalOpen(true);
    setPunModalLoading(true);

    const getJoke = async () => {
      const { data } = await axios.get(
        'https://official-joke-api.appspot.com/jokes/random'
      );

      setPunModalLoading(false);
      setJoke(data);
    };

    getJoke();
  };
  const handleClosePunModal = () => {
    setPunModalOpen(false);
  };

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleClickLoginModal = () => {
    setLoginModalOpen(true);
  };
  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const handleClickRegisterModal = () => {
    setRegisterModalOpen(true);
  };
  const handleCloseRegisterModal = () => {
    setRegisterModalOpen(false);
  };

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
        onClick={handleClickLoginModal}
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
        onClick={handleClickRegisterModal}
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

      <LoginForm
        openFlag={loginModalOpen}
        closeHandler={handleCloseLoginModal}
      ></LoginForm>

      <RegisterForm
        openFlag={registerModalOpen}
        closeHandler={handleCloseRegisterModal}
      ></RegisterForm>

      <Modal openFlag={punModalOpen} closeHandler={handleClosePunModal}>
        {punModalLoading ? (
          <CircularProgress style={{ color: '#ff5050' }} />
        ) : (
          <>
            <Typography style={{ textAlign: 'center' }}>
              {joke.setup}
            </Typography>
            <Typography style={{ textAlign: 'center', fontWeight: 'bold' }}>
              {joke.punchline}
            </Typography>
          </>
        )}
      </Modal>
    </Grid>
  );
};

export default LandingPage;
