import React, { useState } from 'react'
import WithTodoRedux  from '../../../components/WithTodoRedux'

const TodoInput = ({addNewTask}) => {
  const [task, setTask] = useState('')

  const keyPressed = (event) => {
    if (event.key === "Enter") {
      addNewTask(task);
      setTask('')
    }
  };

  const handleChangeInput = (evt) => {
    setTask(evt.target.value)
  };

  return (
    <input
      placeholder='Enter todo name here'
      value={task}
      onChange={handleChangeInput}
      onKeyPress={keyPressed}
    />
  )
};

export default WithTodoRedux(TodoInput);
