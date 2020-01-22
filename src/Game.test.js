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
      game.addPieceToBoardByLocation(0, 1, 'x');
      game.addPieceToBoardByLocation(0, 2, 'x');

      expect(game.isWinByRowAndPlayer(0, 'x')).toBeTruthy();
    });
  });
});
