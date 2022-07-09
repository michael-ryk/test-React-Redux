import { createSlice, configureStore } from '@reduxjs/toolkit';
// import { configure } from '@testing-library/react';

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

const initialAuthState = {
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer}  //Now we pass map of reducers which will be combined together
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
