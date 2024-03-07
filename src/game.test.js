const game = require('./game');

const { Ship } = game;

describe('The Ship factory', () => {
  test('Ship hit once', () => {
    expect(Ship().hit()).toBe(1);
  });

  test.todo('Sunk');
});
