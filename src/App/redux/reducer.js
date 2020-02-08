import _ from 'lodash'
import {SET_TODO_LIST, REMOVE_TASK_TODO} from './action'

const initState = {
  list: [],
}

export default function TodoReducer (state = initState, action) {
  switch (action.type) {
    case SET_TODO_LIST:
      return _.assign({}, state, action.payload)
    case REMOVE_TASK_TODO:
      let newList = state.list

      _.remove(newList, (task) => task.id === action.payload.id)

      return _.assign({}, state, {list: newList})
    default:
      return state
  }
}
