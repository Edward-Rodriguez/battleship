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
    Gameboard = game.Gameboard;
    Ship = game.Ship(3);
  });
  describe('placeShip method', () => {
    test('place ship of length 3 on an empty board given valid coords', () => {
      expect(Gameboard.placeShip(Ship, ['A1', 'B1', 'C1'])).toBeTruthy();
    });
    test('place ship on invalid coordinated', () => {
      expect(Gameboard.placeShip(Ship, ['A1', 'B1', 'Z1'])).toBeFalsy();
    });
    test('board cells: A1, B1, C1 are populated with the same ship instance', () => {
      Gameboard.placeShip(Ship, ['A1', 'B1', 'C1']);
      const fakeBoard = Array.from(Array(10), () => new Array(10).fill(null));
      fakeBoard[0][0] = Ship;
      fakeBoard[1][0] = Ship;
      fakeBoard[2][0] = Ship;
      expect(JSON.stringify(Gameboard.board)).toEqual(
        JSON.stringify(fakeBoard),
      );
    });
  });
  describe('receiveAttack method', () => {
    test('attack hits a ship on board', () => {
      Gameboard.receiveAttack('A1');
      expect(Gameboard.board[0][0].hit()).toHaveBeenCalled();
    });
    test('attack misses, missed coords are returned', () => {
      expect(Gameboard.receiveAttack('A1')).toBe('A1');
    });
  });
});
