export const SET_TODO_LIST = 'SET_TODO_LIST'

export const setTodoList = (_data) => {
  return dispatch => {
    dispatch({
      type: SET_TODO_LIST,
      payload: _data,
    })
  }
}

