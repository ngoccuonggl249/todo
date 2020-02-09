import React, { useState } from 'react'
import WithTodoRedux  from '../../../components/WithTodoRedux'

import TodoInputView from './TodoInput.view'

const TodoInput = ({createTask}) => {
  const [taskContent, setTaskContent] = useState('')

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      createTask(taskContent);
      setTaskContent('')
    }
  };

  const handleChangeInput = (evt) => {
    setTaskContent(evt.target.value)
  };

  return (
    <TodoInputView
      taskContent={taskContent}
      handleChangeInput={handleChangeInput}
      handleKeyPressed={handleKeyPressed}
    />
  )
};

export default WithTodoRedux(TodoInput);
