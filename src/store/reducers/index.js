import { ACTIONS } from '../actions';

const INITIAL_STATE = {
  query: "",
  books: [],
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.SET_QUERY:
      return { ...state, query: action.query};
    
    case ACTIONS.SET_BOOKS:
      return { ...state, books: [...action.books]}
  
    default:
      break;
  }
}