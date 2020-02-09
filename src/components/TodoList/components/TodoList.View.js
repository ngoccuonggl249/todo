import React, { Fragment } from 'react'
import _ from 'lodash'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Button from '../../../vendor/Button'
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
                <Button className={style.close_button} onClick={() => removeTask(task)}>x</Button>
              </div>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </div>
      <div>
        <Button className={style.toggle_button} onClick={toggleDisplayTasks}>Toggle All</Button>
      </div>
    </Fragment>
  )
};

export default TodoListView
