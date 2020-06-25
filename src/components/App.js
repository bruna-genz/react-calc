import React from 'react';
import '../assets/styles/App.css';
import Display from './Display';
import ButtonPannel from './ButtonPannel';

function App() {
  return (
    <div className="App">
      <h1>Math-magicians calculator</h1>
      <Display calcResult="0" />
      <ButtonPannel />
    </div>
  );
}

export default App;
