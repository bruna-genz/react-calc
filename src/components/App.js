import React from 'react';
import '../assets/styles/App.css';
import Display from './Display';
import ButtonPannel from './ButtonPannel';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      calcResult: '0',
    };
  }

  render() {
    const { calcResult } = this.state;

    return (
      <div className="App">
        <h1>Math-magicians calculator</h1>
        <Display calcResult={calcResult} />
        <ButtonPannel />
      </div>
    );
  }
}

export default App;
