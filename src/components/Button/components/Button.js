import React  from 'react'

const Button = ({children, onClick}) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
};

export default Button
