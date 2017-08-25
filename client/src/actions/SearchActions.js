import { SET_SEARCH_TERM } from '../ActionTypes';

export function setSearchTerm(searchTerm) { // eslint-disable-line import/prefer-default-export
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}
