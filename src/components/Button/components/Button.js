import React  from 'react'
import style from '../assets/Button.module.scss';

const Button = ({children, onClick, currentActive, active}) => {
  const handleClick = () => {
    onClick(active)
  }

  return (
    <div className={`${style.button__item} ${currentActive === active && style.active}`}>
      <button onClick={handleClick}>
        {children}
      </button>
    </div>
  )
};

export default Button
