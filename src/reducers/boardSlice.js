import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';
function initializeBoard(width, height) {
  let row = 16;
  let col = 16;
  let board = new Array(row);
  for (let i = 0; i < row; i++) {
    board[i] = new Array(col);
    for (let j = 0; j < col; j++) {
      board[i][j] = 0;
    }
  }
  return board;
}

const initialState = initializeBoard(16, 16);

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setMines(state, action) {
      console.log("set mines called")
      const nextState = produce(state, (draftState) => {
        let mineCount = 40;
        while (mineCount > 0) {
          let min = 0
          let max = 15
          let rand_row = Math.floor(Math.random() * (max - min + 1) + min);
          let rand_col = Math.floor(Math.random() * (max - min + 1) + min);
          if (draftState[rand_row][rand_col] === 0) {
            draftState[rand_row][rand_col] = 1;
            mineCount--;
          }
        }
      });
      return nextState;
    },
    resetBoard(state, action) {
      // console.log("reset board called")
      return state;
    }
  },
});

export const { setMines, resetBoard} = boardSlice.actions;

export default boardSlice.reducer;
