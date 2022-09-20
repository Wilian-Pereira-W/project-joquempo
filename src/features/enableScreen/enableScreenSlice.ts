import { createSlice } from '@reduxjs/toolkit';

export interface enableScreenState {
  enable: boolean;
}

const initialState: enableScreenState = {
  enable: true,
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
  },
});

export const { enable, disable } = enableScreenSlice.actions;

export default enableScreenSlice.reducer;
