import React from 'react'

function Button({ ref, title, fullWidth }) {
  return (
    <a href="#" className={`btn-primary ${fullWidth && "w-full text-center"}`} ref={ref}>
      <span className='btn-highlighter'>{title}</span>
    </a>
  )
}

export default Button;