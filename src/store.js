import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer.js';
import boardReducer from './reducers/boardSlice';
import gamePlayReducer from './reducers/gamePlaySlice';

export default configureStore({
  reducer: {
    board: boardReducer,
    gamePlay: gamePlayReducer,
  },
});
