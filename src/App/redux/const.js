import _ from 'lodash'

export const ADD_NEW_TASK = 'ADD_NEW_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const SET_TASK_DONE = 'SET_TASK_DONE'
export const SET_VIEW_MODE = 'SET_VIEW_MODE'
export const TOGGLE_TASKS_STATUS = 'TOGGLE_TASKS_STATUS'


export const TASK_STATUS = {
  all: 'all',
  active: 'active',
  done: 'done',
}

export const toggleTasksStatus = (tasks, toggleTasks = []) => {
  return _.map(tasks, task => {
    // Check task exist at toggleTasks
    if (_.includes(toggleTasks, task)) {
      // Toggle status
      task.status = (task.status === TASK_STATUS.active) ? TASK_STATUS.done : TASK_STATUS.active
    }

    return task
  })
}
