import React  from 'react'
import WithTodoRedux  from '../../../components/WithTodoRedux'
import Button  from '../../../components/Button'
import { TASK_STATUS } from '../../../App/redux/const';

const ActionButtons = ({setViewMode}) => {
  const showAll = () => {
    setViewMode(TASK_STATUS.all)
  }

  const showActive = () => {
    setViewMode(TASK_STATUS.active)
  }

  const showDone = () => {
    setViewMode(TASK_STATUS.done)
  }

  return (
    <React.Fragment>
      <div>
        <Button onClick={showAll}>All</Button>
        <Button onClick={showActive}>Active</Button>
        <Button onClick={showDone}>Done</Button>
      </div>
    </React.Fragment>
  )
};

export default WithTodoRedux(ActionButtons)
