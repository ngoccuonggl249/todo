import React from 'react'

import style from '../assets/TodoInput.module.scss'

const TodoInputView = ({ taskContent, handleChangeInput, handleKeyPressed }) => {
  return (
    <div className={style.todoInput__container}>
      <input
        className={style.todoInput__input}
        placeholder='Enter todo name here'
        value={taskContent}
        onChange={handleChangeInput}
        onKeyPress={handleKeyPressed}
      />
    </div>
  )
};

export default TodoInputView
