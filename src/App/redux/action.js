export const ADD_NEW_TASK = 'ADD_NEW_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'

export const addNewTask = (_data) => {
  return dispatch => {
    dispatch({
      type: ADD_NEW_TASK,
      payload: _data,
    })
  }
}
export const removeTask = (_data) => {
  return dispatch => {
    dispatch({
      type: REMOVE_TASK,
      payload: _data,
    })
  }
}

