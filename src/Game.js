
export default class Game {
  constructor() {
    this.newGame();
  }

  newGame() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.isWon = false;
    this.currentPosition = [];
    this.currentPlayer = 'x';
  }

  moveTo(row, col) {
    if (this.board[row][col] === '') {
      this.addPieceToBoardByLocation(row, col, this.currentPlayer);
      this.currentPosition = [row, col];
      this.isWon = this.isWin(this.currentPlayer);
      this.switchToNextPlayer();
      return true;
    }
    return false;
  }

  switchToNextPlayer() {
    if (this.currentPlayer === 'x') {
      this.currentPlayer = 'o';
    } else {
      this.currentPlayer = 'x';
    }
  }

  getBoard() {
    return this.board;
  }

  // Gets the last row played
  getRow() {
    return this.currentPosition[0];
  }

  // Gets the last col played
  getCol() {
    return this.currentPosition[0];
  }

  isWin(player) {
    const rowWin = this.isWinByRowAndPlayer(this.getRow(), player);
    const colWin = this.isWinByColAndPlayer(this.getCol(), player);
    const diagWin = this.isDiagnolWinByPlayer(player);
    return rowWin || colWin || diagWin;
  }

  addPieceToBoardByLocation(row, col, playerPiece) {
    this.board[row][col] = playerPiece;
    return this;
  }

  getCurrentValueByLocation(row, col) {
    const boardRow = this.board[row];
    return boardRow[col];
  }

  isWinByRowAndPlayer(row, player) {
    const boardRow = this.board[row];
    return boardRow.every((val) => val === player);
  }

  isWinByColAndPlayer(col, player) {
    const positions = [];
    positions.push(this.board[0][col]);
    positions.push(this.board[1][col]);
    positions.push(this.board[2][col]);

    return positions.every((val) => val === player);
  }

  isWinByDiagnolLeft(player) {
    const positions = [];
    positions.push(this.board[0][0]);
    positions.push(this.board[1][1]);
    positions.push(this.board[2][2]);

    return positions.every((val) => val === player);
  }

  isWinByDiagnolRight(player) {
    const positions = [];
    positions.push(this.board[0][2]);
    positions.push(this.board[1][1]);
    positions.push(this.board[2][0]);

    return positions.every((val) => val === player);
  }

  isDiagnolWinByPlayer(player) {
    return this.isWinByDiagnolLeft(player)
      || this.isWinByDiagnolRight(player);
  }
}
