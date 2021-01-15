import { ACTIONS } from '../actions';

const INITIAL_STATE = {
  query: "",
}

export default function query(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.SET_QUERY:
      return { ...state, query: action.query};

    default:
      return state;
  }
}