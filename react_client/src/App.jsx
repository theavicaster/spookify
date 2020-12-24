import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import store from './redux/store';
import defaultTheme from './defaultTheme';
import Routes from './routes';

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
