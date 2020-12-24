import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ErrorAlert = ({ errors }) => {
  const [open, setOpen] = useState(false);

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
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="error">
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

export default connect(mapStateToProps)(ErrorAlert);
