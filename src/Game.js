
export default class Game {
  constructor() {
    this.newGame();
  }

  newGame() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.isWon = false;
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
    const columns = [];
    columns.push(this.board[0][col]);
    columns.push(this.board[1][col]);
    columns.push(this.board[2][col]);
    return columns.every((val) => val === player);
  }

}
