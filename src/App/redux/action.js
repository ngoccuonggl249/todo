export const SET_TODO_LIST = 'SET_TODO_LIST'
export const REMOVE_TASK_TODO = 'REMOVE_TASK_TODO'

export const setTodoList = (_data) => {
  return dispatch => {
    dispatch({
      type: SET_TODO_LIST,
      payload: _data,
    })
  }
}
export const removeTaskTodo = (_data) => {
  return dispatch => {
    dispatch({
      type: REMOVE_TASK_TODO,
      payload: _data,
    })
  }
}

