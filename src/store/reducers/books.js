import { ACTIONS } from '../actions';

const INITIAL_STATE = {
  volumes: [],
}

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.SET_BOOKS:
      return { ...state, volumes: action.books}
  
    default:
      return state;
  }
}