import React, { Fragment } from 'react'
import _ from 'lodash'
import style from '../assets/TodoList.module.scss'

const TodoListView = ({displayTasks, removeTask, setTaskDone}) => {

  return (
    <Fragment>
    {
      _.map(displayTasks, (task =>
        <div className={style[task.status]}>
          <span onClick={() => setTaskDone(task)}>{task.content}</span>
          <button onClick={() => removeTask(task)}>x</button>
        </div>
      ))
    }
    </Fragment>
  )
};

export default TodoListView
