import { combineReducers } from 'redux';
import userDetailsReducer from '../containers/UserDetails/userDetailsReducer';

export default combineReducers({
  user: userDetailsReducer,
});
