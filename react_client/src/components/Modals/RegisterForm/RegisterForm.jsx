import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, Box } from '@material-ui/core';

import { setErrors } from '../../../redux/actions/errorActions';
import { setLoadingAlert } from '../../../redux/actions/loadingActions';
import { setSuccessMessage } from '../../../redux/actions/successActions';
import Modal from '../ModalBackdrop/Modal';
import spookifyAPI from '../../../api/spookify';
import useStyles from './styles';

const RegisterForm = ({
  openFlag,
  closeHandler,
  dispatchErrors,
  dispatchLoadingAlert,
  dispatchSuccessMessage,
}) => {
  const classes = useStyles();

  return (
    <Modal openFlag={openFlag} closeHandler={closeHandler}>
      <Formik
        initialValues={{
          username: '',
          fullName: '',
          password: '',
          confirmPassword: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Required';
          } else if (
            values.username.length < 3 ||
            values.username.length > 15
          ) {
            errors.username = 'Between 3 to 15 characters';
          }

          if (!values.fullName) {
            errors.fullName = 'Required';
          }

          if (!values.password || values.password.length === 0) {
            errors.password = 'Should not be blank';
          }
          if (values.password.length < 6) {
            errors.password = 'At least 6 characters';
          }

          if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Passwords should match';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const postRegisterForm = async () => {
            dispatchLoadingAlert(true);
            let successfulUser = false;
            try {
              let { data } = await spookifyAPI.post('/users/register', values);

              successfulUser = data.username;
            } catch (error) {
              // when Heroku server first starts, returns empty POST
              if (!error.response) {
                postRegisterForm();
              } else {
                dispatchErrors(error.response.data);
              }
            }

            dispatchLoadingAlert(false);
            setSubmitting(false);

            if (successfulUser) {
              dispatchSuccessMessage(`${successfulUser} can now log in`);
              closeHandler();
            }
          };

          postRegisterForm();
        }}
      >
        {({ submitForm, isSubmitting, errors }) => (
          <Form>
            <Box margin={1}>
              <Field
                component={TextField}
                name="username"
                type="text"
                label="Username"
                helperText="Please enter username"
                InputLabelProps={{
                  style: { color: 'black' },
                }}
              />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                name="fullName"
                type="text"
                label="Full Name"
                InputLabelProps={{
                  style: { color: 'black' },
                }}
              />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                type="password"
                label="Password"
                name="password"
                InputLabelProps={{
                  style: { color: 'black' },
                }}
              />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                InputLabelProps={{
                  style: { color: 'black' },
                }}
              />
            </Box>

            <Box display="flex" justifyContent="center">
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Register
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchErrors: (errors) => dispatch(setErrors(errors)),
    dispatchLoadingAlert: (status) => dispatch(setLoadingAlert(status)),
    dispatchSuccessMessage: (message) => dispatch(setSuccessMessage(message)),
  };
};

export default connect(null, mapDispatchToProps)(RegisterForm);
