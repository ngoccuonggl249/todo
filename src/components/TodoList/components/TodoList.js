import React, { useState, useEffect } from 'react'
import WithTodoRedux  from '../../../components/WithTodoRedux'
import { TASK_STATUS } from '../../../App/redux/const'
import _ from 'lodash'

// View
import TodoListView from './TodoList.View'

const TodoList = ({todo, removeTask, setTaskDone}) => {
  const [displayTasks, setDisplayTasks] = useState([])

  useEffect(() => {
    if (todo.viewMode !== TASK_STATUS.all) {
      // Filter task status = viewMode
      const tasksFiltered = _.filter(todo.tasks, task => task.status === todo.viewMode)
      setDisplayTasks(tasksFiltered)
    } else {
      // Show all tasks
      setDisplayTasks(todo.tasks)
    }
  }, [todo])

  return (
    <TodoListView
      displayTasks={displayTasks}
      removeTask={removeTask}
      setTaskDone={setTaskDone}
    />
  )
};

export default WithTodoRedux(TodoList)
