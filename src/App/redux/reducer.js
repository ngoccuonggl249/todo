import _ from 'lodash'
import {ADD_NEW_TASK, REMOVE_TASK} from './action'

const initState = {
  tasks: [],
}

export default function TodoReducer (state = initState, action) {
  switch (action.type) {
    case ADD_NEW_TASK:
      let newTask = {
        id: Date.now(),
        content: action.payload,
        status: 'active',
      }
      return _.assign({}, state, state.tasks.push(newTask))

    case REMOVE_TASK:
      let newList = state.tasks
      _.remove(newList, (task) => task.id === action.payload.id)
      return _.assign({}, state, {tasks: newList})

    default:
      return state
  }
}
