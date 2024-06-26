/** @jest-environment jsdom */
let Ship;
let Gameboard;
const game = require('.');

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

describe('The Gameboard factory', () => {
  beforeEach(() => {
    Gameboard = game.Gameboard();
    Gameboard.reset();
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
      Gameboard.placeShip(Ship, ['A1', 'B1', 'C1']);
      const spy = jest.spyOn(Gameboard.board[0][0], 'hit');
      expect(Gameboard.receiveAttack('A1')).toBeTruthy();
      expect(spy).toHaveBeenCalled();
      expect(Gameboard.board[0][0].hitCounter).toBe(1);
    });
    test('attack misses, missed coords are returned', () => {
      expect(Gameboard.receiveAttack('E5')).toBe('E5');
    });
  });
  describe('The missedAttacks property', () => {
    test('2 missed attacks(D1,E1) on ship located on A1, B1, C1 ', () => {
      Gameboard.placeShip(Ship, ['A1', 'B1', 'C1']);
      Gameboard.receiveAttack('D1');
      Gameboard.receiveAttack('A1');
      Gameboard.receiveAttack('E1');
      expect(Gameboard.missedAttacks).toEqual(['D1', 'E1']);
    });
    test('3 attacks on ship, all hit no misses', () => {
      Gameboard.placeShip(Ship, ['A1', 'B1', 'C1']);
      Gameboard.receiveAttack('A1');
      Gameboard.receiveAttack('B1');
      Gameboard.receiveAttack('C1');
      expect(Gameboard.missedAttacks).toEqual([]);
    });
  });
  describe('The isEveryShipSunk method', () => {
    test('all two ships sunk', () => {
      const ship1 = game.Ship(3);
      const ship2 = game.Ship(2);
      Gameboard.placeShip(ship1, ['A1', 'B1', 'C1']);
      Gameboard.placeShip(ship2, ['D1', 'D2']);
      ship1.hit();
      ship1.hit();
      ship1.hit();
      ship2.hit();
      ship2.hit();
      expect(ship1.isSunk()).toBeTruthy();
      expect(ship2.isSunk()).toBeTruthy();
      expect(Gameboard.isEveryShipSunk()).toBeTruthy();
    });
    test('all ships hit but not sunk', () => {
      const Ship2 = game.Ship(2);
      Gameboard.placeShip(Ship, ['A1', 'B1', 'C1']);
      Gameboard.placeShip(Ship2, ['D1', 'D2']);
      Ship.hit();
      Ship.hit();
      Ship2.hit();
      expect(Ship.isSunk()).toBeFalsy();
      expect(Ship2.isSunk()).toBeFalsy();
      expect(Gameboard.isEveryShipSunk()).toBeFalsy();
    });
  });
  describe('The indexToCoordinate method', () => {
    test('Convert index: row[0], col[5] to "A6"', () => {
      expect(Gameboard.indexToCoordinate(0, 5)).toBe('A6');
    });
  });
});

describe('The Player factory', () => {
  let player;
  test('player attack is added to attacksList', () => {
    player = game.Player();
    player.attacksList.add('A1');
    player.attacksList.add('A2');
    expect(player.attacksList).toContain('A1');
    expect(player.attacksList).toContain('A2');
    expect(player.attacksList.size).toBe(2);
  });
  test('player(computer) makes random move', () => {
    player = game.Player(true);
    player.randomAttack();
    const regex = /^[A-J]([2-9]|1[0]?)/; // A1 - J10
    expect(player.attacksList.size).toBe(1);
    expect(
      Array.from(player.attacksList).some((entry) => regex.test(entry)),
    ).toBeTruthy();
  });
  test('player(computer) avoids duplicate random move', () => {
    player = game.Player(true);
    const attackSet = new Set();
    for (let i = 0; i < 100; i += 1) {
      attackSet.add(player.randomAttack());
    }
    expect(player.attacksList.size).toBe(100);
    expect(attackSet.size).toBe(100);
  });
});
