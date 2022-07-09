import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const isShown = useSelector(state => state.isShown);

  const incrementHandle = () => {
    dispatch({ type: 'increment'});   //exactly same as action in store
  }

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 });
  }

  const decrementtHandle = () => {
    dispatch({ type: 'decrement'});   //exactly same as action in store
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'toggleShowHide'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShown && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementtHandle}>-</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={incrementHandle}>+</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;