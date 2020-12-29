import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, Box } from '@material-ui/core';

import Modal from '../ModalBackdrop/Modal';
import spookifyAPI from '../../../api/spookify';
import useStyles from './styles';

const PlaylistForm = ({ openFlag, closeHandler, playlistId }) => {
  const classes = useStyles();

  return (
    <>
      <Modal openFlag={openFlag} closeHandler={closeHandler}>
        <Formik
          initialValues={{
            name: '',
          }}
          validate={(values) => {
            const errors = {};

            if (!values.name || values.name.length === 0) {
              errors.name = 'Should not be blank';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const postPlaylist = async () => {
              if (playlistId) {
                // UPDATE
                await spookifyAPI.patch(`/playlists/${playlistId}`, values);
              } else {
                // CREATE
                await spookifyAPI.post(`/playlists`, values);
              }

              setSubmitting(false);
              closeHandler();
            };

            postPlaylist();
          }}
        >
          {({ submitForm, isSubmitting, errors }) => (
            <Form>
              <Box margin={1}>
                <Field
                  component={TextField}
                  name="name"
                  type="text"
                  label="Name"
                  helperText="Please enter name"
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
                  {playlistId ? 'Update' : 'Create'}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default PlaylistForm;
