import { SET_SUCCESS_MESSAGE } from '../types';

const initialState = {
  successMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
