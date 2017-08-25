import { SET_SEARCH_TERM } from '../ActionTypes';

const INITIAL_STATE = {
  searchTerm: ''
};

export default function searchTerm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return Object.assign({}, state, { searchTerm: action.payload });
    default:
      return state;
  }
}
