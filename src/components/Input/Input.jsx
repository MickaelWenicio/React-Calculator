import React from 'react'
import './Input.css'

const Input = ({value, symbol}) => {
  return (
    <div id='divInput'>
        <input type="text" id='Input' disabled value={value} symbol={symbol}/>
    </div>
  )
}

export default Input