import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import defaultTheme from './defaultTheme.js';
import Routes from './routes';

const App = () => {
  return (
    <MuiThemeProvider theme={createMuiTheme(defaultTheme)}>
      <CssBaseline />
      <Routes />
    </MuiThemeProvider>
  );
};

export default App;
