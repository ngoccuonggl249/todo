import React, { Fragment } from 'react'
import _ from 'lodash'
import WithTodoRedux  from '../../../components/WithTodoRedux'

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

export default WithTodoRedux(TodoList)
