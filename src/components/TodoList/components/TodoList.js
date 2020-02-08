import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { removeTaskTodo } from '../../../App/redux/action'
import _ from 'lodash'

const TodoList = ({todo, removeTaskTodo}) => {

  const onRemoveTask = (task) => {
    removeTaskTodo(task)
  };


  return (
    <Fragment>
    {
      _.map(todo.tasks, (task =>
        <div>
          {task.content}
          <button onClick={() => onRemoveTask(task)}>x</button>
        </div>
      ))
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
