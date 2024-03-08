const game = require('./game');

let Ship;
let Gameboard;

describe('The Ship factory', () => {
  beforeEach(() => {
    Ship = game.Ship();
  });

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

describe('The Gameboard factory', () => {
  beforeEach(() => {
    Gameboard = game.Gameboard();
    Ship = game.Ship();
  });
  test('place ship of length 3 on an empty board given valid coords', () => {
    expect(Gameboard.placeShip(Ship, ['A1', 'B1', 'C1'])).toBeTruthy();
  });
  test.todo('place ship on invalid coordinated', () => {
    expect(Gameboard.placeShip(Ship, ['A1', 'B1', 'Z1'])).toBeFalsy();
  });
});
