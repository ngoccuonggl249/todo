import React, { Fragment } from 'react'
import _ from 'lodash'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import style from '../assets/TodoList.module.scss'

const TodoListView = ({displayTasks, removeTask, setTaskDone, toggleDisplayTasks}) => {

  return (
    <Fragment>
      <div className={style.wrapper}>
        <TransitionGroup>
          {
            _.map(displayTasks, (task =>
              <CSSTransition
                key={task.id}
                timeout={250}
              >
              <div className={`${style.item} ${style[task.status]}`}>
                <div className={style.content} onClick={() => setTaskDone(task)}>{task.content}</div>
                <button className={style.close_button} onClick={() => removeTask(task)}>x</button>
              </div>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </div>
      <div>
        <button onClick={toggleDisplayTasks}>Toggle All</button>
      </div>
    </Fragment>
  )
};

export default TodoListView
