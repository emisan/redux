import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import IncreaseCounter from './components/IncreaseCounter';
import IncreaseCounterByTwo from './components/IncreaseCounterByTwo';
import DecreaseCounter from './components/DecreaseCounter';
import Counter from './components/Counter';
import ResetCounter from './components/ResetCounter';
import Calculator from './components/calculator/Calculator';

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>MIJB React Kurs</h3>
      </div>
      <div>
        <Counter/>
        <IncreaseCounter/>
        <IncreaseCounterByTwo/>
        <DecreaseCounter/>
        <ResetCounter/>
      </div>
      <div>
        <Calculator/>
      </div>
    </div>
  );
}

export default App;
