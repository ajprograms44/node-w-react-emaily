import { FETCH_USER } from '../actions/types';

export default (state = null, action) => {
  switch(action.type){
    case FETCH_USER:
    return action.payload || false; 
    //This will be the user model
    //We've made sure that fetch-user returns a payload with either:
    //null (state=null), 
    //the user (payload as it would normally come)
    //or false (Using || false with the action.payload is a javascript trick to return false if both 
    // the payload and false is false)
    default:
      return state;
  }
}