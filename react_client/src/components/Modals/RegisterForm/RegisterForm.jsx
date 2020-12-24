import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, Box } from '@material-ui/core';

import { setErrors } from '../../../redux/actions/errorActions';
import { setLoadingAlert } from '../../../redux/actions/loadingActions';
import Modal from '../ModalBackdrop/Modal';
import useStyles from './styles';

const RegisterForm = ({
  openFlag,
  closeHandler,
  setErrors,
  setLoadingAlert,
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
            setLoadingAlert(true);
            try {
              const { data } = await axios.post(
                'https://spookify-music.herokuapp.com/api/users/register', //TODO change base URL
                values
              );
              console.log(JSON.stringify(data)); //TODO register
            } catch (error) {
              setErrors(error.response.data);
            }

            setLoadingAlert(false);
            setSubmitting(false);
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
              />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                name="fullName"
                type="text"
                label="Full Name"
              />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                type="password"
                label="Password"
                name="password"
              />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                type="password"
                label="Confirm Password"
                name="confirmPassword"
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
    setErrors: (errors) => dispatch(setErrors(errors)),
    setLoadingAlert: (status) => dispatch(setLoadingAlert(status)),
  };
};

export default connect(null, mapDispatchToProps)(RegisterForm);
