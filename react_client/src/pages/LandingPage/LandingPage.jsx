import React, { useState } from 'react';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { Button, Typography, CircularProgress } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

import jokeAPI from '../../api/joke';
import spookifyAPI from '../../api/spookify';
import SpookifyIcon from '../../components/Icons/SpookifyIcon/SpookifyIcon';
import Modal from '../../components/Modals/ModalBackdrop/Modal';
import useStyles from './styles';
import LoginForm from '../../components/Modals/LoginForm/LoginForm';
import RegisterForm from '../../components/Modals/RegisterForm/RegisterForm';
import setJwtToken from '../../utils/setJwtToken';
import { setErrors } from '../../redux/actions/errorActions';
import { setLoadingAlert } from '../../redux/actions/loadingActions';
import { setCurrentUser } from '../../redux/actions/userActions';

const LandingPage = ({
  dispatchErrors,
  dispatchCurrentUser,
  dispatchLoadingAlert,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const [punModalOpen, setPunModalOpen] = useState(false);
  const [punModalLoading, setPunModalLoading] = useState(false);
  const [joke, setJoke] = useState({});

  const handleClickPunModal = () => {
    setPunModalOpen(true);
    setPunModalLoading(true);

    const getJoke = async () => {
      const { data } = await jokeAPI.get('/random');

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

  const handleClickDemo = () => {
    const postLoginForm = async () => {
      dispatchLoadingAlert(true);

      const values = {
        username: 'demoUser',
        password: 'demoPassword',
      };

      try {
        let { data } = await spookifyAPI.post('/users/login', values);

        const token = data.token;

        localStorage.setItem('jwtToken', token);
        setJwtToken(token);

        const decodedJwt = jwt_decode(token);
        dispatchCurrentUser(decodedJwt);
      } catch (error) {
        if (!error.response) {
          // when Heroku server first starts, returns empty POST
          postLoginForm();
        } else {
          dispatchErrors(error.response.data);
        }
      }

      dispatchLoadingAlert(false);
      history.push('/browse');
    };

    postLoginForm();
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
        onClick={handleClickDemo}
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
          <CircularProgress style={{ color: '#b30000' }} />
        ) : (
          <>
            <Typography style={{ textAlign: 'center' }}>
              {joke.setup}
            </Typography>
            <Typography
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#b30000',
              }}
            >
              {joke.punchline}
            </Typography>
          </>
        )}
      </Modal>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchErrors: (errors) => dispatch(setErrors(errors)),
    dispatchLoadingAlert: (status) => dispatch(setLoadingAlert(status)),
    dispatchCurrentUser: (currentUser) => dispatch(setCurrentUser(currentUser)),
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);
