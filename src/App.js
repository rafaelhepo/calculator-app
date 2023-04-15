import './App.css';
import { Button, ButtonClear, Screen } from './Components';
import reactIcon from './react.png';
import { useState } from 'react';
import { evaluate } from 'mathjs';


export function App() {

  const [input, setInput] = useState('');

  const addInput = val => { setInput(input + val); };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));    
    } else {
      alert('Please enter your values')
    };
  };


  return (
    <div className='App'>
      <div className='container-reactIcon'>
        <img 
          src={reactIcon}                
          className='react-logo'
          alt='Blue React Logo' />
      </div>
      <div className='container-calc'>
        <Screen input={input} />
        <div className='buttons-row'>
            <Button ctrlClick={addInput}>1</Button>
            <Button ctrlClick={addInput}>2</Button>
            <Button ctrlClick={addInput}>3</Button>
            <Button ctrlClick={addInput}>+</Button>
        </div>
        <div className='buttons-row'>
            <Button ctrlClick={addInput}>4</Button>
            <Button ctrlClick={addInput}>5</Button>
            <Button ctrlClick={addInput}>6</Button>
            <Button ctrlClick={addInput}>-</Button>
        </div>
        <div className='buttons-row'>
            <Button ctrlClick={addInput}>7</Button>
            <Button ctrlClick={addInput}>8</Button>
            <Button ctrlClick={addInput}>9</Button>
            <Button ctrlClick={addInput}>*</Button>
        </div>
        <div className='buttons-row'>
            <ButtonClear ctrlClear={() => setInput('')}> C </ButtonClear>
            <Button ctrlClick={addInput}>0</Button>
            <Button ctrlClick={addInput}>.</Button>
            <Button ctrlClick={addInput}>/</Button>
        </div>
        <div className='buttons-row'>
            <Button ctrlClick={calculateResult}>=</Button>
        </div>
      </div>
    </div>
  );
}