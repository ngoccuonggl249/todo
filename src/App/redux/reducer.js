import _ from 'lodash'
import {
  TASK_STATUS,
  ADD_NEW_TASK,
  REMOVE_TASK,
  SET_TASK_DONE,
  SET_VIEW_MODE
} from './const'

const initState = {
  tasks: [],
  viewMode: 'all',
}

export default function TodoReducer (state = initState, action) {
  let newTasks = state.tasks

  switch (action.type) {
    case ADD_NEW_TASK:
      //Init task
      let initTask = {
        id: Date.now(),
        content: action.payload,
        status: TASK_STATUS.active,
      }
      return _.assign({}, state, state.tasks.push(initTask))

    case REMOVE_TASK:
      // Remove task in array
      _.remove(newTasks, task => task.id === action.payload.id)
      return _.assign({}, state, {tasks: newTasks})

    case SET_TASK_DONE:
      newTasks.map(task => {
        if (task.id === action.payload.id) {
          task.status = TASK_STATUS.done
        }
        return task
      });
      return _.assign({}, state, {tasks: newTasks})

    case SET_VIEW_MODE:
      return _.assign({}, state, {viewMode: action.payload})

    default:
      return state
  }
}
