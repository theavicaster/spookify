import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { setErrors } from '../../redux/actions/errorActions';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ErrorAlert = ({ errors, dispatchErrors }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    dispatchErrors({});
  };

  useEffect(() => {
    // if not empty {}
    if (Object.keys(errors).length !== 0) {
      setOpen(true);
    }
  }, [errors]);

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {Object.values(errors).join('\n')}
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    errors: state.error.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchErrors: (errors) => dispatch(setErrors(errors)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorAlert);
