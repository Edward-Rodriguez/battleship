const game = require('./game');

let Ship;

beforeEach(() => {
  Ship = game.Ship();
});

describe('The Ship factory', () => {
  test('ship hit once', () => {
    expect(Ship.hit()).toBe(1);
  });

  test('ship(length 3) is sunk after 3 hits', () => {
    Ship.length = 3;
    for (let i = 0; i < 3; i += 1) {
      Ship.hit();
    }
    expect(Ship.isSunk()).toBeTruthy();
  });

  test('ship(length 3) is not sunk after a few hits', () => {
    Ship.length = 3;
    for (let i = 0; i < 2; i += 1) {
      Ship.hit();
    }
    expect(Ship.isSunk()).toBeFalsy();
  });
});
