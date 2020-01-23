import React from 'react';
import UniqueKey from 'unique-key';
import Game from './Game';
import Row from './Row';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const game = new Game();
const board = game.getBoard();

function App() {
  const boardRows = board.map((row, i) => <Row key={UniqueKey()} row={i} cols={row} />);
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
