import React, { useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import '../App.css';
import { showBoard } from '../reducers/gamePlaySlice.js';
import {getAdjacentMines} from './GameManager';
import { FaVirus } from 'react-icons/fa';
import { RiNumber1 } from 'react-icons/ri';

export default function Square({ x, y, squareState, showSquare }) {
  console.log("showSquare = " + showSquare);
  // const [isMineState, setMineState] = useState('empty');
  const board = useSelector((state) => state.board);
  const [showSquareIcon, setShowSquareIcon] = useState(showSquare);
  const dispatch = useDispatch();
  const mineClass = 'fa-solid fa-bomb';
  const numberOneClass = 'fa-regular fa-1';
  const numberTwoClass = 'fa-regular fa-2';
  const numberThreeClass = 'fa-regular fa-3';


  function show() {
    if (squareState==='X') {
      dispatch(showBoard())
    }
    // getAdjacentMines(board, x, y);
  }

  function iconToShow() {
    console.log("square called")
    if (squareState === 0){
      return ''
    }else if(squareState === 'X'){
      return(
      <span className="icon-class">
          <FaVirus />
     </span>)
   }else{
    return <RiNumber1 />;
    }
  }

  return (
    <div className="box" onClick={show}>
      {showSquare === 0 ?  iconToShow() : ''}
    </div>
  );
}
