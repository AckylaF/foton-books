import { call, put } from 'redux-saga/effects'
import req from 'superagent'
import { fetchFailure, fetchSuccess } from './actions'

export default function* fetchBooks({ payload: { query, startIndex = 0 } }) {
  try {
    const response = yield call(() =>
      req.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}`
      )
    )

    yield put(fetchSuccess(response.body.items))
  } catch (error) {
    yield put(fetchFailure())
  }
}
