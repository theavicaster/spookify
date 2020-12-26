import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { setSuccessMessage } from '../../redux/actions/successActions';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SuccessAlert = ({ successMessage, dispatchSuccessMessage }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    dispatchSuccessMessage('');
  };

  useEffect(() => {
    if (successMessage !== '') {
      setOpen(true);
    }
  }, [successMessage]);

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {successMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    successMessage: state.success.successMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSuccessMessage: (message) => dispatch(setSuccessMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SuccessAlert);
