import { createSlice } from '@reduxjs/toolkit';

export interface scoreboardState {
  player: number;
  will: number;
  draw: number;
}

const initialState: scoreboardState = {
  player: 0,
  will: 0,
  draw: 0,
};

export const scoreboardSlice = createSlice({
  name: 'scoreboard',
  initialState,
  reducers: {
    incrementPlayer: (state) => {
      state.player += 1;
    },
    incrementWill: (state) => {
      state.will += 1;
    },
    incrementDraw: (state) => {
      state.draw += 1;
    },
  },
});

export const { incrementPlayer, incrementWill, incrementDraw } =
  scoreboardSlice.actions;

export default scoreboardSlice.reducer;
