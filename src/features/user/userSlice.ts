import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface userState {
  name: string;
}

const initialState: userState = {
  name: '',
};

export const userSlice = createSlice({
  name: 'userScreen',
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { addName } = userSlice.actions;

export default userSlice.reducer;
