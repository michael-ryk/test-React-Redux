import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, isShown: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;

//No need export all, just reducer part
export default counterSlice.reducer;
