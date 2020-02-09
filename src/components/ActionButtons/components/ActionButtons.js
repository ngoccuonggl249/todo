import React  from 'react'
import WithTodoRedux  from '../../../components/WithTodoRedux'
import Button  from '../../../components/Button'

const ActionButtons = () => {

  const toggleAll = () => {
    console.log('toggleAll');
  }

  const showAll = () => {
    console.log('showAll');
  }

  const showActive = () => {
    console.log('showActive');
  }

  const showDone = () => {
    console.log('showDone');
  }

  return (
    <React.Fragment>
      <div>
        <Button onClick={toggleAll}>Toggle All</Button>
      </div>
      <div>
        <Button onClick={showAll}>All</Button>
        <Button onClick={showActive}>Active</Button>
        <Button onClick={showDone}>Done</Button>
      </div>
    </React.Fragment>
  )
};

export default WithTodoRedux(ActionButtons)
