import React, { useState } from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const LoadingAlert = ({ loading }) => {
  const [, setOpen] = useState(false);

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={loading}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
      >
        <Alert
          style={{ color: 'black' }}
          onClose={() => setOpen(false)}
          severity="warning"
        >
          Please wait as Heroku server may be restarting
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loadingAlert.loading,
  };
};

export default connect(mapStateToProps)(LoadingAlert);
