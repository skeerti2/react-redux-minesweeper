import React, { useState } from 'react';
import '../App.css';
import { FaVirus } from 'react-icons/fa';
import { RiNumber1 } from 'react-icons/ri';

export default function Square({ x, y, isMine }) {
  const [isMineState, setMineState] = useState('empty');
  console.log("square rendered");

  function show() {
    if (isMine===1) {
      setMineState('mine');
    } else {
      setMineState('number');
    }
  }

  function iconToShow() {
    if (isMineState === 'empty') {
      return '';
    } else if (isMineState === 'mine') {
      return (
        <span className="icon-class">
          <FaVirus />
        </span>
      );
    } else {
      return <RiNumber1 />;
    }
  }
  return (
    <div className="box" onClick={show}>
      {iconToShow()}
    </div>
  );
}
