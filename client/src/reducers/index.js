import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer
});

//Whatever keys we pass into the combineReducers object are going to represent 
//the keys inside of our state object

//auth: authReducer
//- The auth piece of state is being produced by the authReducer