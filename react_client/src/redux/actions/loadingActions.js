import { SET_LOADING_ALERT } from '../types';

export const setLoadingAlert = (status) => {
  return {
    type: SET_LOADING_ALERT,
    payload: status,
  };
};
