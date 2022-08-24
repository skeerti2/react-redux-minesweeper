import * as React from 'react';
import './App.css';
import Game from './components/Game';
// import '../public/css/game.css';

export default function App() {
  return (
    <div className="container">
      <h1>Minesweeper</h1>
      <Game />
    </div>
  );
}
