import { SET_CURRENT_USER } from '../types';

const initialState = {
  currentUser: {},
  loggedIn: false,
};

const isLoggedIn = (payload) => {
  return payload.hasOwnProperty('username');
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: isLoggedIn(action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
