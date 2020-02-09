export const ADD_NEW_TASK = 'ADD_NEW_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const SET_TASK_DONE = 'SET_TASK_DONE'

/**
 * Add new task
 * @param _content {String} Content of task
 * @returns {Function}
 */
export const addNewTask = (_content) => {
  return dispatch => {
    dispatch({
      type: ADD_NEW_TASK,
      payload: _content,
    })
  }
}

/**
 * Remove Task
 * @param _task {object}
 * @returns {Function}
 */
export const removeTask = (_task) => {
  return dispatch => {
    dispatch({
      type: REMOVE_TASK,
      payload: _task,
    })
  }
}

/**
 * Set task status to done
 * @param _task {object}
 * @returns {Function}
 */
export const setTaskDone = (_task) => {
  return dispatch => {
    dispatch({
      type: SET_TASK_DONE,
      payload: _task,
    })
  }
}

