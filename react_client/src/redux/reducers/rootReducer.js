import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  loadingAlert: loadingReducer,
});

export default rootReducer;
