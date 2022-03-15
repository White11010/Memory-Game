import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CounterState {
  timer: number;
  moves: number;
}

const initialState: CounterState = {
  timer: 0,
  moves: 0,
};



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTimer: (state) => {
      state.timer += 1;
    },
    addMoves: (state) =>  {
      state.moves += 1;
    },
    resetCounter: (state) => {
      state.timer = 0;
      state.moves = 0;
    },

  },
});

export const { addTimer, addMoves, resetCounter } = counterSlice.actions;

export const selectTimer = (state: RootState) => state.counter.timer;
export const selectMoves = (state: RootState) => state.counter.moves;


export default counterSlice.reducer;
