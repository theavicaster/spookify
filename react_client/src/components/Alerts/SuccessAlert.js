import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SuccessAlert = ({ successMessage }) => {
  const [open, setOpen] = useState(false);

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
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="success">
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

export default connect(mapStateToProps)(SuccessAlert);
