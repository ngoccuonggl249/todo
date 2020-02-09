import React, { Fragment } from 'react'
import _ from 'lodash'
import WithTodoRedux  from '../../../components/WithTodoRedux'
import style from '../assets/TodoList.module.scss'

const TodoList = ({todo, removeTask, setTaskDone}) => {

  return (
    <Fragment>
    {
      _.map(todo.tasks, (task =>
        <div className={style[task.status]}>
          <span onClick={() => setTaskDone(task)}>{task.content}</span>
          <button onClick={() => removeTask(task)}>x</button>
        </div>
      ))
    }
    </Fragment>
  )
};

export default WithTodoRedux(TodoList)
