import React from 'react';
import { Dialog, Paper } from '@material-ui/core';
import useStyles from './styles';

const Modal = ({ openFlag, closeHandler, children }) => {
  const classes = useStyles();
  return (
    <Dialog open={openFlag} onClose={closeHandler}>
      <Paper className={classes.paper}>{children}</Paper>
    </Dialog>
  );
};

export default Modal;
