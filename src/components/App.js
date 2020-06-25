import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <Display calcResult="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
