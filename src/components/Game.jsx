import * as React from 'react';
import Board from './Board';
import store from '../store.js';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMines, resetBoard } from '../reducers/boardSlice.js';
import { startGame, showBoard } from '../reducers/gamePlaySlice';

export default function Game() {
  const gameState = useSelector((state) => state.gamePlay);
  const dispatch = useDispatch();
  useEffect(() => {
    if(gameState === 1){
      dispatch(setMines());
    }
  }, [gameState]);

  function handleGameState() {
      dispatch(resetBoard());
      // dispatch(stopGame())
  }
  return (
    <div className="container">
      <button onClick={handleGameState}>
        Restart
      </button>
      <Board gameEnd={gameState}/>
    </div>
  );
}
