import React, { Component } from 'react';
import { connect } from 'react-redux';

const remove10 = { type: 'DEC10' };
const remove1 = { type: 'DEC1' };
const reset = { type: 'RESET' };
const add1 = { type: 'INC1' };
const add10 = { type: 'INC10' };

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render () {
    const { counter, dispatch } = this.props;
    return (
      <div>
        <p>{counter}</p>
        <button onClick={() => dispatch(remove10)}>-10</button>
        <button onClick={() => dispatch(remove1)}>-</button>
        <button onClick={() => dispatch(reset)}>Reset</button>
        <button onClick={() => dispatch(add1)}>+</button>
        <button onClick={() => dispatch(add10)}>+10</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state
});

const counterContainer = connect(mapStateToProps)(Counter);

export default counterContainer;
