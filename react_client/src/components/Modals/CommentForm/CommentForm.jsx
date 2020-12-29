import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, Box } from '@material-ui/core';

import Modal from '../ModalBackdrop/Modal';
import spookifyAPI from '../../../api/spookify';
import useStyles from './styles';

const CommentForm = ({ openFlag, closeHandler, commentId, songId }) => {
  const classes = useStyles();

  return (
    <>
      <Modal openFlag={openFlag} closeHandler={closeHandler}>
        <Formik
          initialValues={{
            content: '',
          }}
          validate={(values) => {
            const errors = {};

            if (!values.content || values.content.length === 0) {
              errors.content = 'Should not be blank';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const postComment = async () => {
              if (commentId) {
                // UPDATE
                await spookifyAPI.patch(`/comments/${commentId}`, values);
              } else {
                // CREATE
                await spookifyAPI.post(`/comments/song/${songId}`, values);
              }

              setSubmitting(false);
              closeHandler();
            };

            postComment();
          }}
        >
          {({ submitForm, isSubmitting, errors }) => (
            <Form>
              <Box margin={1}>
                <Field
                  component={TextField}
                  name="content"
                  type="text"
                  label="Content"
                  helperText="Please enter comment content"
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
                  {commentId ? 'Update' : 'Create'}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default CommentForm;
