import { createSlice } from '@reduxjs/toolkit';

export interface enableScreenState {
  enable: boolean;
  enableScoreboard: boolean;
  enableMain: boolean;
  enableResult: boolean;
}

const initialState: enableScreenState = {
  enable: true,
  enableScoreboard: false,
  enableMain: false,
  enableResult: false,
};

export const enableScreenSlice = createSlice({
  name: 'enableScreen',
  initialState,
  reducers: {
    enable: (state) => {
      state.enable = true;
    },
    disable: (state) => {
      state.enable = false;
    },
    enableScoreboard: (state) => {
      state.enableScoreboard = true;
    },
    disableScoreboard: (state) => {
      state.enableScoreboard = false;
    },
    enableMain: (state) => {
      state.enableMain = true;
    },
    disableMain: (state) => {
      state.enableMain = false;
    },
    enableResult: (state) => {
      state.enableResult = true;
    },
    disableResult: (state) => {
      state.enableResult = false;
    },
  },
});

export const {
  enable,
  disable,
  enableScoreboard,
  disableScoreboard,
  enableMain,
  disableMain,
  enableResult,
  disableResult,
} = enableScreenSlice.actions;

export default enableScreenSlice.reducer;
