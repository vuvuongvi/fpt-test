import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [fName, setfName] = useState('');
  const [fNumber, setNumber] = useState('');
  const submitValue = () => {
    const frmdetails = {
      fName
    }
    let calculatePrimeValue = prime(frmdetails.fName)
    setNumber(calculatePrimeValue);
}
  const prime = (number) => {
    if (number && 1) {
      number -= 2;
    } else {
      number--;
    }
    let i, j;
    for (i = number; i >= 2; i -= 2) {
      if (i % 2 === 0) {
        continue;
      }
      for (j = 3; j <= Math.sqrt(i); j += 2) {
        if (i % j == 0)
          break;
      }
      if (j > Math.sqrt(i))
        return i;
    }
    return 2;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="number" placeholder="input number" name="name" onChange={e => setfName(e.target.value)} />
        <button type="submit" onClick={submitValue}>submit</button>
        <div>
          {fNumber}
        </div>
      </header>
    </div>
  );
}

export default App;
