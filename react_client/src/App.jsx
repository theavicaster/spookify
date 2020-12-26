import React from 'react';
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import store from './redux/store';
import defaultTheme from './defaultTheme';
import Routes from './routes';
import setJwtToken from './utils/setJwtToken';
import { setCurrentUser, logout } from './redux/actions/userActions';

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJwtToken(jwtToken);
  const decodedJWT = jwt_decode(jwtToken);
  store.dispatch(setCurrentUser(decodedJWT));

  const currentTime = Date.now() / 1000;
  if (decodedJWT.exp < currentTime) {
    localStorage.removeItem('jwtToken');
    setJwtToken(false);
    store.dispatch(logout());
    window.location.href = '/';
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={createMuiTheme(defaultTheme)}>
        <CssBaseline />
        <Routes />
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
