// create an initial state of an Array because we want to show multiple search requests results

import { FIND_WEATHER } from '../actions/index'
// importing FIND_WEATHER makes sure we do not need to use strings in our
// actions switch, where we could make typos which could lead to reducers not
// responding to the action requests. A typo in a constant WILL trigger errors!

export default function(state = [], action) {
  // console.log('Action received', action);

  console.log('State before reducer:', state)

  switch (action.type) {
    case FIND_WEATHER:
      // return state.concat([action.payload.data]);
      // above creates a NEW array! REMEMBER: do NOT use .push because we do
      // not want to change a state object: ALWAYS RETURN A NEW ONE
      // below is ES6 equivalent - Will put new data in front
      return [ action.payload.data , ...state ];

  }
  return state;
}
