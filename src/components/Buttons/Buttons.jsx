import React from 'react'
import Button from './button/Button'
import './Buttons.css'

const index = () => {
  return (
    <div className='Buttons'>
      <Button value={1}/>
      <Button value={2}/>
      <Button value={3}/>
      <Button value={'+'} type="signal"/>
      <Button value={4}/>
      <Button value={5}/>
      <Button value={6}/>
      <Button value={"-"} type="signal"/>
      <Button value={7}/>
      <Button value={8}/>
      <Button value={9}/>
      <Button value={"x"} type="signal"/>
      <Button value={"="} type="equal"/>
      <Button value={0}/>
      <Button value={"/"} type="signal"/>
      <Button value={"C"} type="clear"/>
    </div>
  )
}

export default index