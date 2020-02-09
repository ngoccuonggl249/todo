import React from 'react'
import { connect } from "react-redux"
import { addNewTask, removeTask, setTaskDone, setViewMode } from '../../../App/redux/action'

const withTodoRedux = (WrappedComponent) => {
  class HOC extends React.Component {

    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      );
    }
  }

  // Map redux
  const mapPropToState = (state) => ({
    todo: state.todo,
  })

  const mapDispatchToProps = {
    addNewTask,
    removeTask,
    setTaskDone,
    setViewMode,
  }

  return connect(mapPropToState, mapDispatchToProps)(HOC);
}

export default withTodoRedux
