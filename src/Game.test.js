import Game from './Game';

let game;
describe('Game rules for tic tac toe', () => {
  beforeEach(() => {
    game = new Game();
  });

  afterEach(() => game.newGame());

  it('should add an available piece to the board', () => {
    game.addPieceToBoardByLocation(1, 1, 'x');
    expect(game.getCurrentValueByLocation(1, 1)).toBe('x');
  });

  describe('Wins by row', () => {
    it('declares a win for x on first row', () => {
      game.addPieceToBoardByLocation(0, 0, 'x');
      game.addPieceToBoardByLocation(0, 1, 'x');
      game.addPieceToBoardByLocation(0, 2, 'x');

      expect(game.isWinByRowAndPlayer(0, 'x')).toBeTruthy();
    });

    it('declares a win for o on second row', () => {
      game.addPieceToBoardByLocation(1, 0, 'o');
      game.addPieceToBoardByLocation(1, 1, 'o');
      game.addPieceToBoardByLocation(1, 2, 'o');

      expect(game.isWinByRowAndPlayer(1, 'o')).toBeTruthy();
    });

    it('declares a win for o on third row', () => {
      game.addPieceToBoardByLocation(2, 0, 'o');
      game.addPieceToBoardByLocation(2, 1, 'o');
      game.addPieceToBoardByLocation(2, 2, 'o');

      expect(game.isWinByRowAndPlayer(2, 'o')).toBeTruthy();
    });
  });

  describe('Wins by columns', () => {
    it('declares a win for x on the first column', () => {
      game.addPieceToBoardByLocation(0, 0, 'x');
      game.addPieceToBoardByLocation(1, 0, 'x');
      game.addPieceToBoardByLocation(2, 0, 'x');

      expect(game.isWinByColAndPlayer(0, 'x')).toBeTruthy();
    });

    it('declares a win for o on the second column', () => {
      game.addPieceToBoardByLocation(0, 1, 'o');
      game.addPieceToBoardByLocation(1, 1, 'o');
      game.addPieceToBoardByLocation(2, 1, 'o');
      expect(game.isWinByColAndPlayer(1, 'o')).toBeTruthy();
    });

    it('declares a win for o on the third column', () => {
      game.addPieceToBoardByLocation(0, 2, 'o');
      game.addPieceToBoardByLocation(1, 2, 'o');
      game.addPieceToBoardByLocation(2, 2, 'o');
      expect(game.isWinByColAndPlayer(2, 'o')).toBeTruthy();
    });
  });

  describe('Wins by diaganols', () => {
    it('declares a win for x diagnolly starting from top left', () => {
      game.addPieceToBoardByLocation(0, 0, 'x');
      game.addPieceToBoardByLocation(1, 1, 'x');
      game.addPieceToBoardByLocation(2, 2, 'x');

      expect(game.isWinByDiagnolLeft('x')).toBeTruthy();
    });

    it('declares a win for o diagnolly starting from top right', () => {
      game.addPieceToBoardByLocation(0, 2, 'o');
      game.addPieceToBoardByLocation(1, 1, 'o');
      game.addPieceToBoardByLocation(2, 0, 'o');

      expect(game.isWinByDiagnolRight('o')).toBeTruthy();
    });

    it('declares a win for o diagnolly', () => {
      game.addPieceToBoardByLocation(0, 2, 'o');
      game.addPieceToBoardByLocation(1, 1, 'o');
      game.addPieceToBoardByLocation(2, 0, 'o');

      expect(game.isDiagnolWinByPlayer('o')).toBeTruthy();
    });

    it('declares a win for x diagnolly', () => {
      game.addPieceToBoardByLocation(0, 0, 'x');
      game.addPieceToBoardByLocation(1, 1, 'x');
      game.addPieceToBoardByLocation(2, 2, 'x');

      expect(game.isDiagnolWinByPlayer('x')).toBeTruthy();
    });
  });

  describe('Moves can only be valid', () => {
    it('does not allow y to move to the same location as x', () => {
      expect(game.moveTo(0, 0)).toBeTruthy();
      expect(game.moveTo(0, 0)).toBeFalsy();
      // Make sure that it's the same player since the move was invalid
      expect(game.currentPlayer).toBe('o');
    });
  });

  describe('Playing a game', () => {
    it('Plays x to a win', () => {
      game.moveTo(1, 1);
      expect(game.isWin('x')).toBeFalsy();
      game.moveTo(0, 0);
      expect(game.isWin('o')).toBeFalsy();
      game.moveTo(0, 2);
      expect(game.isWin('x')).toBeFalsy();
      game.moveTo(0, 1);
      expect(game.isWin('o')).toBeFalsy();
      game.moveTo(2, 0);
      expect(game.isWin('x')).toBeTruthy();
    });

    it('Plays o to a win', () => {
      game.moveTo(1, 1);
      expect(game.isWin('x')).toBeFalsy();
      game.moveTo(0, 0);
      expect(game.isWin('o')).toBeFalsy();
      game.moveTo(2, 2);
      expect(game.isWin('x')).toBeFalsy();
      game.moveTo(0, 1);
      expect(game.isWin('o')).toBeFalsy();
      game.moveTo(2, 0);
      game.moveTo(0, 2);
      expect(game.isWin('o')).toBeTruthy();
    });
  });
});
