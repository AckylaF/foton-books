import { combineReducers } from 'redux';

import books from './books';
import query from './query';
import likedBooks from './likedBooks'

export default combineReducers({
  books,
  query,
  likedBooks,
})