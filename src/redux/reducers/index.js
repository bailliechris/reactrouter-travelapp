import {ADD_NUMBER} from '../actions/action-types'

// Set up initial state values
const initialNumber = {
    number: 0
  };
  
// Root reducer 
// Checks actions sent in and runs actions
function rootReducer(state = initialNumber, action) {
  if (action.type === ADD_NUMBER) {
    return Object.assign({}, state, {
      number: (state.number += action.payload)
    });
  }
  return state;
};

export default rootReducer;