import React from 'react'
import './Input.css'

const Input = ({display}) => {
  return (
    <div id='divInput'>
        <input type="text" id='Input' disabled value={display}/>
    </div>
  )
}

export default Input