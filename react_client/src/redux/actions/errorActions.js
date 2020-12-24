import { SET_ERRORS } from '../types';

export const setErrors = (errors) => {
  return {
    type: SET_ERRORS,
    payload: errors,
  };
};
