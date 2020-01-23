import React from 'react';
import UniqueKey from 'uuid/v1';
import Game from './Game';
import Row from './Row';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const game = new Game();
  const board = game.getBoard();

  function handleMove(p) {
    const move = game.moveTo(p.row, p.col);
    return move;
  }
  const boardRows = board.map((row, i) => (
    <Row
      key={UniqueKey()}
      handleMove={handleMove}
      row={i}
      cols={row}
    />
  ));

  return (
    <div className="App">
      <p>
        Tic Tac Toe
      </p>
      <div className="container jumbotron board" id="container">
        {boardRows}
      </div>
    </div>
  );
}

export default App;
