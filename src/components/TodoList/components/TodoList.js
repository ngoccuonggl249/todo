import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { removeTask } from '../../../App/redux/action'
import _ from 'lodash'

const TodoList = ({todo, removeTask}) => {

  const onRemoveTask = (task) => {
    removeTask(task)
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
  removeTask,
}

export default connect(mapPropToState, mapDispatchToProps)(TodoList)
