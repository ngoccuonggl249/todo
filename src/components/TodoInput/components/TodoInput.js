import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addNewTask } from '../../../App/redux/action'

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

// Map redux
const mapPropToState = (state) => ({
  todo: state.todo,
})

const mapDispatchToProps = {
  addNewTask,
}

export default connect(mapPropToState, mapDispatchToProps)(TodoInput)
