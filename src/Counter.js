import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <button onClick={() => dispatch({ type: 'DEC10' })}>-10</button>
        <button onClick={() => dispatch({ type: 'DEC1' })}>-</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'INC1' })}>+</button>
        <button onClick={() => dispatch({ type: 'INC10' })}>+10</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state
});

const counterContainer = connect(mapStateToProps)(Counter);

export default counterContainer;
