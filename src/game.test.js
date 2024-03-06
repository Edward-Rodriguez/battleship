const game = require('./game');

const { Ship } = game;

describe('The Ship factory', () => {
  test('Ship hit once', () => {
    Ship.hit();
    expect(Ship.length).toBe(1);
  });

  test.todo('Sunk');
});
