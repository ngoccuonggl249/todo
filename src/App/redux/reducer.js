import { assign } from 'lodash'
import {SET_TODO_LIST} from './action'

const initState = {
  list: [],
}

export default function TodoReducer (state = initState, action) {
  switch (action.type) {
    case SET_TODO_LIST:
      return assign({}, state, action.payload)
    default:
      return state
  }
}
