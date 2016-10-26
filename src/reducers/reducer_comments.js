import { FETCH_COMMENTS, FETCH_COMMENT } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state= INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_COMMENT:
      return {...state, post: action.payload.data };
    case FETCH_COMMENTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
