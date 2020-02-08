import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { removeTaskTodo } from '../../../App/redux/action'

const TodoList = ({todo, removeTaskTodo}) => {

  const onRemoveTask = (task) => {
    removeTaskTodo(task)
  };


  return (
    <Fragment>
    {
      todo.list.map(task =>
        <div>
          {task.content}
          <button onClick={() => onRemoveTask(task)}>x</button>
        </div>
      )
    }
    </Fragment>
  )
};

// Map redux
const mapPropToState = (state) => ({
  todo: state.todo,
})

const mapDispatchToProps = {
  removeTaskTodo,
}

export default connect(mapPropToState, mapDispatchToProps)(TodoList)
