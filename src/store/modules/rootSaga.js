import { all, takeLatest } from 'redux-saga/effects'

import Types from './books/types'
import fetchBooks from './books/sagas'

export default function* rootSaga() {
  return yield all([takeLatest(Types.FETCH_REQUEST, fetchBooks)])
}
