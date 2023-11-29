import React, { useEffect, useState } from 'react'
import './Calculator.css'
import Input from '../Input/Input'
import Button from '../Buttons/button/Button'
import '../Buttons/Buttons.css'

const Calculator = () => {

  const [display, setDisplay]= useState([0])

  
  const insertValue=(value)=>{
    setDisplay(display === 0 ? String(value) : display + String(value));
  }
  
  return (
    <div className='calculator'>
      <Input display={display}/>
      <div className='Buttons'>
        <Button value={1} func={()=> insertValue(1)}/>
        <Button value={2} func={()=> insertValue(2)}/>
        <Button value={3} func={()=> insertValue(3)}/>
        <Button value={'+'} type="signal" func={()=> insertValue('+')}/>
        <Button value={4} func={()=> insertValue(4)}/>
        <Button value={5} func={()=> insertValue(5)}/>
        <Button value={6} func={()=> insertValue(6)}/>
        <Button value={"-"} type="signal" func={()=> insertValue('-')}/>
        <Button value={7} func={()=> insertValue(7)}/>
        <Button value={8} func={()=> insertValue(8)}/>
        <Button value={9} func={()=> insertValue(9)}/>
        <Button value={"x"} type="signal" func={()=> insertValue('x')}/>
        <Button value={"="} type="equal"/>
        <Button value={0} func={()=> insertValue(0)}/>
        <Button value={"/"} type="signal" func={()=> insertValue('/')}/>
        <Button value={"C"} type="clear" func={()=> setDisplay(0)}/>
      </div>
    </div>
  )
}

export default Calculator