import { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Counter.module.css';

class Counter extends Component {

  //Methods:
  incrementHandle() {
    this.props.increment();
  }

  decrementtHandle() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render(){
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.decrementtHandle.bind(this)}>-</button>
          <button onClick={this.incrementHandle.bind(this)}>+</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);