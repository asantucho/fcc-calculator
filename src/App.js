import React from 'react';
import './styles/styles.css';
import Logo from './images/freecodecamp-logo.png';
import Screen from './components/Screen';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    setInput(evaluate(input));
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img
          src={Logo}
          alt='Free Code Camp logo'
          className='logo-freecodecamp'
        />
      </div>
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='calc-row'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='calc-row'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className='calc-row'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='calc-row'>
          <Button manageClick={calculateResult}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className='calc-row'>
          <ClearButton manageClear={() => setInput('')}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
