import { SET_SUCCESS_MESSAGE } from '../types';

export const setSuccessMessage = (message) => {
  return {
    type: SET_SUCCESS_MESSAGE,
    payload: message,
  };
};
