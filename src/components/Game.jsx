import * as React from 'react';
import Board from './Board';
import store from '../store.js';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { startGame, stopGame } from '../reducers/gamePlaySlice.js';
import { setMines, resetBoard } from '../reducers/boardSlice.js';
import { startGame, stopGame } from '../reducers/gamePlaySlice';

export default function Game() {
  const gameState = useSelector((state) => state.gamePlay);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMines());
  }, [gameState]);

  function handleGameState() {
      dispatch(resetBoard());
      dispatch(stopGame())
  }
  return (
    <div className="container">
      <button onClick={handleGameState}>
        Restart
      </button>
      <Board />
    </div>
  );
}
