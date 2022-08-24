import { createSlice } from '@reduxjs/toolkit';

const initialState = 1;

const gamePlaySlice = createSlice({
  name: 'gamePlay',
  initialState,
  reducers: {
    startGame(state, action) {
      return 1;
    },
    stopGame(state, action) {
      return 0;
    },
  },
});

export const { startGame, stopGame } = gamePlaySlice.actions;

export default gamePlaySlice.reducer;
