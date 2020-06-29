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
      // eslint-disable-next-line react/no-unused-state
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(prevState => (
      calculate(prevState, buttonName)
    ));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <Display calcResult={total || next || undefined} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
        <div>
          <p>{`total: ${total}`}</p>
          <p>{`next: ${next}`}</p>
          <p>{`operation: ${operation}`}</p>
        </div>
      </div>
    );
  }
}

export default App;
