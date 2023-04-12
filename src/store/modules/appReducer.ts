import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../types';

const initialState: AppState = {
  counter: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
  },
});

export const { increment } = appSlice.actions;

export default appSlice.reducer;
