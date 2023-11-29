import React from 'react'
import './Calculator.css'
import Input from '../Input/Input'
import Buttons from '../Buttons/Buttons'

const Calculator = () => {
  return (
    <div className='calculator'>
      <Input />
      <Buttons />
    </div>
  )
}

export default Calculator