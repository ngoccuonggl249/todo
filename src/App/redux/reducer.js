import _ from 'lodash'
import {ADD_NEW_TASK, REMOVE_TASK, SET_TASK_DONE} from './action'

const initState = {
  tasks: [],
}

export default function TodoReducer (state = initState, action) {
  let newTasks = state.tasks

  switch (action.type) {
    case ADD_NEW_TASK:
      //Init task
      let initTask = {
        id: Date.now(),
        content: action.payload,
        status: 'active',
      }
      return _.assign({}, state, state.tasks.push(initTask))

    case REMOVE_TASK:
      // Remove task in array
      _.remove(newTasks, task => task.id === action.payload.id)
      return _.assign({}, state, {tasks: newTasks})

    case SET_TASK_DONE:
      newTasks.map(task => {
        if (task.id === action.payload.id) {
          task.status = 'done'
        }
        return task
      });
      return _.assign({}, state, {tasks: newTasks})

    default:
      return state
  }
}
