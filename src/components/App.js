import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calcResult = calculate(this.state, buttonName);

    this.setState(prevState => ({
      total: calcResult,
      next: calcResult,
      operation: calcResult,
    }));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="App">
        <Display calcResult={total || next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
