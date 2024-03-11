function Ship(size = null) {
  let length = size;
  let hitCounter = null;

  function isSunk() {
    return length ? length === hitCounter : false;
  }

  function hit() {
    hitCounter += 1;
    return hitCounter;
  }

  return {
    get length() {
      return length;
    },
    set length(newLength) {
      length = newLength;
    },
    get hitCounter(){return hitCounter}
    hit,
    isSunk,
  };
}

const Gameboard = (() => {
  const boardSize = 10;
  const board = [];
  for (let row = 0; row < boardSize; row += 1) {
    board[row] = [];
    for (let col = 0; col < boardSize; col += 1) {
      board[row][col] = null;
    }
  }

  function coordinateToIndex(coordinate) {
    const [row, col] = coordinate.toUpperCase().split('');
    const rowCharCode = row.charCodeAt();
    const rowIndexValue = rowCharCode - 65;
    const colIndexValue = Number(col) - 1;
    return [rowIndexValue, colIndexValue];
  }

  function isValidCoordinate(coordinate) {
    let isValid = true;
    const [rowIndex, colIndex] = [...coordinateToIndex(coordinate)];
    [rowIndex, colIndex].forEach((index) => {
      if (typeof index !== 'number' || index < 0 || index > boardSize - 1) {
        isValid = false;
      }
    });
    return isValid;
  }

  function isOccupied(coordinate) {
    const [row, col] = [...coordinateToIndex(coordinate)];
    return !!board[row][col];
  }

  function placeShip(ship, coordinates) {
    if (
      ship.length !== coordinates.length ||
      coordinates.some((coord) => !isValidCoordinate(coord)) ||
      coordinates.some((coord) => isOccupied(coord))
    ) {
      return false;
    }
    coordinates.forEach((coord) => {
      const [row, col] = coordinateToIndex(coord);
      const newShip = Ship(coordinates.length);
      board[row][col] = newShip;
    });
    return true;
  }

  return {
    placeShip,
    get board() {
      return board;
    },
  };
})();

module.exports = {
  Ship,
  Gameboard,
};
