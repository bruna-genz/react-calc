import React from 'react';
import '../assets/styles/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <h1>Math-magicians calculator</h1>
      <Display calcResult="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
