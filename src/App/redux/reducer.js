import _ from 'lodash'
import {SET_TODO_LIST, REMOVE_TASK_TODO} from './action'

const initState = {
  tasks: [],
}

export default function TodoReducer (state = initState, action) {
  switch (action.type) {
    case SET_TODO_LIST:
      return _.assign({}, state, action.payload)
    case REMOVE_TASK_TODO:
      let newList = state.tasks

      _.remove(newList, (task) => task.id === action.payload.id)

      return _.assign({}, state, {tasks: newList})
    default:
      return state
  }
}
