import actions, * as actionTypes from './actions'
import initialState from './state'
import { handleActions } from 'redux-actions'
import { ActionMaps } from '~/types'

type Actions = ActionMaps<typeof actions>

const reducers = handleActions({
  [actionTypes.INCREMENT]: (state, { payload }: Actions['INCREMENT']) => {
    return { ...state, count: state.count + payload.by }
  },
  [actionTypes.DECREMENT]: (state, { payload }: Actions['DECREMENT']) => {
    return { ...state, count: state.count - payload.by }
  },
}, initialState)

export default reducers
