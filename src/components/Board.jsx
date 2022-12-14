import * as React from 'react';
import Square from './Square';
import store from '../store.js';
import {useSelector} from 'react-redux'

export default function Board(props) {
  const board = useSelector((state) => state.board);
  console.log(props.gameEnd)
  function setUpBoard() {
    const squaresList = [];
    for (let j = 0; j < 16; j++) {
      const newRow = [];
      for (let i = 0; i < 16; i++) {
        newRow.push(<Square x={i} y={j} squareState={board[i][j]} showSquare={props.gameEnd} />);
      }
      squaresList.push(<div className="boardRow">{newRow}</div>);
    }
    return squaresList;
  }

  return <div className="wrapper">{setUpBoard()}</div>;
}
