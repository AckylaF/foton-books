import { ACTIONS } from '../actions';

const INITIAL_STATE = {
  favorites: [],
}

export default function likedBooks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.SET_LIKED_BOOKS:
      return { ...state, favorites: action.likedBooks }
  
    default:
      return state;
  }
}