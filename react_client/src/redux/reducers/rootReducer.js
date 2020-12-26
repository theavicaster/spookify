import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import userReducer from './userReducer';
import successReducer from './successReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  loadingAlert: loadingReducer,
  user: userReducer,
  success: successReducer,
});

export default rootReducer;
