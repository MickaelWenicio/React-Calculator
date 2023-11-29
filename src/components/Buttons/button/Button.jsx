import React from 'react'
import './Button.css'

const Button = ({value, type}) => {

  const checkButtonType=()=>{
    if(type ==="signal"){
      return "signal"
    } else if (type === "equal"){
      return "equal"
    } else if(type==="clear"){
      return "clear"
    } else{
      return "number"
    }
  }

  const checkDivType=()=>{
    if(type ==="signal"){
      return "divSignal"
    } else if (type === "equal"){
      return "divEqual"
    } else if(type==="clear"){
      return "divClear"
    } else{
      return "divNumber"
    }
  }

  return (
    <div className={checkDivType()}>
      <button className={checkButtonType()}>{value}</button>
    </div>
  )
}

export default Button