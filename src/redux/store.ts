import { configureStore } from '@reduxjs/toolkit';
import scoreboardReducer from '../features/scoreboard/scoreboardSlice';
import enableScreenReducer from '../features/enableScreen/enableScreenSlice';

export const store = configureStore({
  reducer: {
    scoreboard: scoreboardReducer,
    enableScreen: enableScreenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
