import React from 'react';
import Game from './Game';
import './App.css';

const tictactoe = new Game();

// eslint-disable-next-line no-console

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Tic Tac Toe
        </p>
      </header>
    </div>
  );
}

export default App;
