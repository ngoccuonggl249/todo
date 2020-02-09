import React from 'react'
import Button  from '../../../components/Button'
import { TASK_STATUS } from '../../../App/redux/const'
import style from '../assets/ViewModeButtons.module.scss'

const ViewModeButtonsView = ({ viewMode, showViewMode }) => {
  return (
    <React.Fragment>
      <div className={style.buttonFooter__container}>
        <Button onClick={showViewMode} active={TASK_STATUS.all} currentActive={viewMode}>All</Button>
        <Button onClick={showViewMode} active={TASK_STATUS.active} currentActive={viewMode}>Active</Button>
        <Button onClick={showViewMode} active={TASK_STATUS.done} currentActive={viewMode}>Done</Button>
      </div>
    </React.Fragment>
  )
};

export default ViewModeButtonsView
