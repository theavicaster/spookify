import { SET_ERRORS } from '../types';

const initialState = {
  errors: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
