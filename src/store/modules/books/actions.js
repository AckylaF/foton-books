import { action } from 'typesafe-actions'
import Types from './types'

export const fetchRequest = () => action(Types.FETCH_REQUEST)

export const fetchSuccess = volumes => action(Types.FETCH_SUCCESS, { volumes })

export const fetchFailure = () => action(Types.FETCH_FAILURE)
