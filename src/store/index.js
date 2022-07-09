import { createSlice, configureStore } from '@reduxjs/toolkit';
// import { configure } from '@testing-library/react';

const initialState = {counter: 0, isShown: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;   //Behind scene toolkit create "payload" where store value i pass
    },
    toggleCounter(state) {
      state.isShown = !state.isShown;
    }
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;
