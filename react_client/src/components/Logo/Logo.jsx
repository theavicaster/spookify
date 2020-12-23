import React from 'react';

import Typography from '@material-ui/core/Typography';
import SpookifyIcon from '../Icons/SpookifyIcon/SpookifyIcon';

import useStyles from './styles';

const Logo = () => {
  const classes = useStyles();

  return (
    <>
      <SpookifyIcon className={classes.icon} height="1em" width="1em" />
      <Typography className={classes.logoText}>Spookify</Typography>
    </>
  );
};

export default Logo;
