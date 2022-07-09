import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 , isShown: true}, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      isShown: true,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      isShown: true,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      isShown: true,
    };
  }

  if (action.type === 'toggleShowHide') {
    return {
      counter: state.counter,
      isShown: !state.isShown,
    }
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
