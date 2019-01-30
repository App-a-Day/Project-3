import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import authReducer from './authReducer';
import userReducer from "./userReducer";

export default combineReducers({
  item: itemReducer,
  isSignedIn: authReducer,
  user: userReducer 
});
