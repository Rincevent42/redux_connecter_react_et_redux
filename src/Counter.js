import React, { Component } from 'react';

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleRemove10 = this.handleRemove10.bind(this);
    this.handleRemove1 = this.handleRemove1.bind(this);
    this.handleAdd1 = this.handleAdd1.bind(this);
    this.handleAdd10 = this.handleAdd10.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleRemove10 () {
    const newCounter = this.state.counter - 10;
    this.setState({ counter: newCounter });
  }

  handleRemove1 () {
    const newCounter = this.state.counter - 1;
    this.setState({ counter: newCounter });
  }

  handleAdd1 () {
    const newCounter = this.state.counter + 1;
    this.setState({ counter: newCounter });
  }

  handleAdd10 () {
    const newCounter = this.state.counter + 10;
    this.setState({ counter: newCounter });
  }

  handleReset () {
    this.setState({ counter: 0 });
  }

  render () {
    return (
      <div>
        <p id='render-store'>{this.state.counter}</p>
        <button id='remove10' onClick={this.handleRemove10} >-10</button>
        <button id='remove' onClick={this.handleRemove1} >-</button>
        <button id='reset' onClick={this.handleReset} >Reset</button>
        <button id='add' onClick={this.handleAdd1} >+</button>
        <button id='add10' onClick={this.handleAdd10} >+10</button>
      </div>
    );
  }
}
 
export default Counter;
