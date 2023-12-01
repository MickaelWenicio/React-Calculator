import React, { useEffect, useState } from 'react'
import './Calculator.css'
import Input from '../Input/Input'
import Button from '../Buttons/button/Button'
import '../Buttons/Buttons.css'

const Calculator = () => {

  const [display, setDisplay]= useState([0])
  const [result, setResult]= useState(0)

  const insertValue = (value) => {
    if (display.length === 1 && display[0] === 0) {
      // Se o display contém apenas um elemento (0), substituir pelo novo valor
      setDisplay([value]);
    } else {
      setDisplay((prevDisplay) => [...prevDisplay, value]);
      display.join('')
    }
  };

  const insertSymbol = (symbol) => {
    // Verifica se o array já contém um símbolo
    if (!display.some(item => typeof item === 'string')) {
      // Adiciona o novo símbolo apenas se não houver símbolos no array
      setDisplay(prevDisplay => [...prevDisplay, symbol]);
      display.join('')
    }
  };
  
  const calculate = (display)=>{
    let beforeSymbol = []; // numeros antes do simbolo
    let afterSymbol = []; // numeros depois do simbolo
    let foundSymbol = false; //checa se o simbolo foi encontrado
    let symbol; //simbolo na tela

    if (!display.some(item => typeof item === 'string')) {
      return;
    }//verifica se há pelo menos um simbolo na tela para evitar problemas ao clicar no botão "="


    //percorre o array display procurando os numeros e separando eles entre numeros antes e depois do simbolo
    for(let i = 0; i < display.length; i++){
      const item = display[i];
      if(typeof item === "number"){
        if(!foundSymbol){ 
          //caso o simbolo não seja encontrado
          beforeSymbol.push(item)
        } else { 
          //caso o simbolo seja encontrado
          afterSymbol.push(item)
        }
      } else{ 
        //ao encontrar o simbolo no array, adiciona o item encontrado a variavel symbol e muda o foundSymbol para true
        symbol = [item] 
        foundSymbol = true
      }
    }

    //formata os arrays de numeros de antes e depois do simbolo para string e atribui eles a duas variaveis diferentes.
    let numberAfterTheSymbol = afterSymbol.join('')
    let numberBeforeTheSymbol = beforeSymbol.join('')

    //checa o simbolo encontrado e atribui a result o valor já calculado baseado no simbolo
    setResult(()=>{
      if (symbol[0] === "+") {
        return Number(numberBeforeTheSymbol) + Number(numberAfterTheSymbol);
      } else if (symbol[0] === "-") {
        return Number(numberBeforeTheSymbol) - Number(numberAfterTheSymbol);
      } else if (symbol[0] === "x") {
        return Number(numberBeforeTheSymbol) * Number(numberAfterTheSymbol);
      } else {
        return Number(numberBeforeTheSymbol) / Number(numberAfterTheSymbol);
      };
    })
  }
  
  //observa a variavel result e atualiza a tela sempre que ela é alterada
  useEffect(()=>{
    setDisplay([result])
  },[result])

  return (
    <div className='calculator'>
      <Input display={display.join('')}/> {/*formada o display para string*/}
      <div className='Buttons'>
        <Button value={1} func={()=> insertValue(1)}/>
        <Button value={2} func={()=> insertValue(2)}/>
        <Button value={3} func={()=> insertValue(3)}/>
        <Button value={'+'} type="signal" func={()=> insertSymbol('+')}/>
        <Button value={4} func={()=> insertValue(4)}/>
        <Button value={5} func={()=> insertValue(5)}/>
        <Button value={6} func={()=> insertValue(6)}/>
        <Button value={"-"} type="signal" func={()=> insertSymbol('-')}/>
        <Button value={7} func={()=> insertValue(7)}/>
        <Button value={8} func={()=> insertValue(8)}/>
        <Button value={9} func={()=> insertValue(9)}/>
        <Button value={"x"} type="signal" func={()=> insertSymbol('x')}/>
        <Button value={"="} type="equal" func={()=> calculate(display)}/>
        <Button value={0} func={()=> insertValue(0)}/>
        <Button value={"/"} type="signal" func={()=> insertSymbol('/')}/>
        <Button value={"C"} type="clear" func={()=> setDisplay([0])}/>
      </div>
    </div>
  )
}

export default Calculator