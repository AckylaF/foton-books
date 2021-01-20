import Types from './types'

const INITIAL_STATE = {
  volumes: [],
  loading: false,
  error: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_REQUEST:
      return { ...state, loading: true }

    case Types.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        volumes: action.payload.volumes
      }

    case Types.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        volumes: []
      }

    default:
      return state
  }
}

export default reducer
