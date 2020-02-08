import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setTodoList } from '../../../App/redux/action'

const TodoInput = ({todo, setTodoList}) => {
  const [task, setTask] = useState('')

  const keyPressed = (event) => {
    if (event.key === "Enter") {
      setTodoList(todo.list.push({
        id: Date.now(),
        content: task,
        status: 'active',
      }));
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

// Map redux
const mapPropToState = (state) => ({
  todo: state.todo,
})

const mapDispatchToProps = {
  setTodoList,
}

export default connect(mapPropToState, mapDispatchToProps)(TodoInput)
