import { SET_CURRENT_USER } from '../types';

export const setCurrentUser = (currentUser) => {
  return {
    type: SET_CURRENT_USER,
    payload: currentUser,
  };
};

export const logout = () => {
  return {
    type: SET_CURRENT_USER,
    payload: {},
  };
};
