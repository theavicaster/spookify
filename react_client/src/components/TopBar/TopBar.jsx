import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Box from '@material-ui/core/Box';

import useStyles from './styles';
import Logo from '../Logo/Logo';

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.topBar}>
      <Toolbar>
        <Logo />

        <Box flexGrow={1} />

        <Typography>Documentation / Source Code</Typography>
        <a
          href="https://github.com/theavicaster/spookify"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton aria-label="github" className={classes.iconButton}>
            <GitHubIcon />
          </IconButton>
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
