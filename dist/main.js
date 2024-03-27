/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

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
    get hitCounter() {
      return hitCounter;
    },
    hit,
    isSunk,
  };
}

const Gameboard = () => {
  const boardSize = 10;
  let board = new2DArray(boardSize);
  let missedAttacks = [];

  function coordinateToIndex(coordinate) {
    const [row, col] = coordinate.toUpperCase().split('');
    const rowCharCode = row.charCodeAt();
    const rowIndexValue = rowCharCode - 65;
    const colIndexValue = Number(col) - 1;
    return [rowIndexValue, colIndexValue];
  }

  function indexToCoordinate(row, col) {
    const rowCharCode = String.fromCharCode(row + 65);
    return rowCharCode + (col + 1);
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
      board[row][col] = ship;
    });
    return true;
  }

  function receiveAttack(coordinate) {
    const [row, col] = [...coordinateToIndex(coordinate)];
    if (board[row][col]) {
      board[row][col].hit();
      return true;
    }
    missedAttacks.push(coordinate);
    return coordinate;
  }

  function new2DArray(size) {
    return Array.from(Array(size), () => new Array(size).fill(null));
  }

  function reset() {
    board = new2DArray(boardSize);
    missedAttacks = [];
  }

  function isEveryShipSunk() {
    let shipsSunk = true;
    board.forEach((row) =>
      row.forEach((ship) => {
        if (ship !== null && !ship.isSunk()) {
          shipsSunk = false;
        }
      }),
    );
    return shipsSunk;
  }

  return {
    placeShip,
    receiveAttack,
    reset,
    isEveryShipSunk,
    indexToCoordinate,
    get board() {
      return board;
    },
    get missedAttacks() {
      return missedAttacks;
    },
  };
};

const Player = (isComputer = false) => {
  const attacksList = new Set();
  let availableMovesSet = new Set();

  function generateMovesSet() {
    const movesSet = new Set();
    for (let i = 65; i <= 74; i += 1) {
      // A-J unicode
      for (let j = 1; j <= 10; j += 1) {
        movesSet.add(String.fromCharCode(i) + j);
      }
    }
    return movesSet;
  }

  if (isComputer) availableMovesSet = generateMovesSet();

  function randomAttack() {
    const random = Math.floor(Math.random() * availableMovesSet.size);
    const randomCoordinate = Array.from(availableMovesSet)[random];
    availableMovesSet.delete(randomCoordinate);
    attacksList.add(randomCoordinate);
    return randomCoordinate;
  }

  return {
    get isComputer() {
      return isComputer;
    },
    get attacksList() {
      return attacksList;
    },
    randomAttack,
  };
};

const gameController = (() => {
  const playerOne = Player();
  const playerTwo = Player(true);
  const playerOneBoard = Gameboard();
  const playerTwoBoard = Gameboard();

  const playerOneShipOne = Ship(5);
  const playerOneShipTwo = Ship(3);
  const playerOneShipThree = Ship(2);

  const playerTwoShipOne = Ship(4);
  const playerTwoShipTwo = Ship(1);
  const playerTwoShipThree = Ship(2);

  const playerOneShipPositions = [
    ['A1', 'A2', 'A3', 'A4', 'A5'],
    ['C3', 'D3', 'E3'],
    ['J2', 'J3'],
  ];

  const playerTwoShipPositions = [
    ['B1', 'B2', 'B3', 'B4'],
    ['D5'],
    ['I4', 'I5'],
  ];

  playerOneBoard.placeShip(playerOneShipOne, playerOneShipPositions[0]);
  playerOneBoard.placeShip(playerOneShipTwo, playerOneShipPositions[1]);
  playerOneBoard.placeShip(playerOneShipThree, playerOneShipPositions[2]);

  playerTwoBoard.placeShip(playerTwoShipOne, playerTwoShipPositions[0]);
  playerTwoBoard.placeShip(playerTwoShipTwo, playerTwoShipPositions[1]);
  playerTwoBoard.placeShip(playerTwoShipThree, playerTwoShipPositions[2]);

  // const playRound = () => {};
})();

const displayController = (() => {
  const renderBoard = (board) => {
    const boardDiv = document.createElement('div');
    board.forEach((row, rowIndex) =>
      row.forEach((cell, colIndex) => {
        const cellButton = document.createElement('button');
        cellButton.dataset.coord = board.indexToCoordinate(rowIndex, colIndex);
        if (cell) {
          console.log(cell.length);
        }
      }),
    );
    return boardDiv;
  };

  return {
    renderBoard,
  };
})();

module.exports = {
  Ship,
  Gameboard,
  Player,
  gameController,
  displayController,
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM5TkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU2hpcChzaXplID0gbnVsbCkge1xuICBsZXQgbGVuZ3RoID0gc2l6ZTtcbiAgbGV0IGhpdENvdW50ZXIgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICByZXR1cm4gbGVuZ3RoID8gbGVuZ3RoID09PSBoaXRDb3VudGVyIDogZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgaGl0Q291bnRlciArPSAxO1xuICAgIHJldHVybiBoaXRDb3VudGVyO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9LFxuICAgIHNldCBsZW5ndGgobmV3TGVuZ3RoKSB7XG4gICAgICBsZW5ndGggPSBuZXdMZW5ndGg7XG4gICAgfSxcbiAgICBnZXQgaGl0Q291bnRlcigpIHtcbiAgICAgIHJldHVybiBoaXRDb3VudGVyO1xuICAgIH0sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn1cblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZFNpemUgPSAxMDtcbiAgbGV0IGJvYXJkID0gbmV3MkRBcnJheShib2FyZFNpemUpO1xuICBsZXQgbWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNvb3JkaW5hdGVUb0luZGV4KGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRpbmF0ZS50b1VwcGVyQ2FzZSgpLnNwbGl0KCcnKTtcbiAgICBjb25zdCByb3dDaGFyQ29kZSA9IHJvdy5jaGFyQ29kZUF0KCk7XG4gICAgY29uc3Qgcm93SW5kZXhWYWx1ZSA9IHJvd0NoYXJDb2RlIC0gNjU7XG4gICAgY29uc3QgY29sSW5kZXhWYWx1ZSA9IE51bWJlcihjb2wpIC0gMTtcbiAgICByZXR1cm4gW3Jvd0luZGV4VmFsdWUsIGNvbEluZGV4VmFsdWVdO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5kZXhUb0Nvb3JkaW5hdGUocm93LCBjb2wpIHtcbiAgICBjb25zdCByb3dDaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUocm93ICsgNjUpO1xuICAgIHJldHVybiByb3dDaGFyQ29kZSArIChjb2wgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVmFsaWRDb29yZGluYXRlKGNvb3JkaW5hdGUpIHtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG4gICAgY29uc3QgW3Jvd0luZGV4LCBjb2xJbmRleF0gPSBbLi4uY29vcmRpbmF0ZVRvSW5kZXgoY29vcmRpbmF0ZSldO1xuICAgIFtyb3dJbmRleCwgY29sSW5kZXhdLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBib2FyZFNpemUgLSAxKSB7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzT2NjdXBpZWQoY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBbLi4uY29vcmRpbmF0ZVRvSW5kZXgoY29vcmRpbmF0ZSldO1xuICAgIHJldHVybiAhIWJvYXJkW3Jvd11bY29sXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcykge1xuICAgIGlmIChcbiAgICAgIHNoaXAubGVuZ3RoICE9PSBjb29yZGluYXRlcy5sZW5ndGggfHxcbiAgICAgIGNvb3JkaW5hdGVzLnNvbWUoKGNvb3JkKSA9PiAhaXNWYWxpZENvb3JkaW5hdGUoY29vcmQpKSB8fFxuICAgICAgY29vcmRpbmF0ZXMuc29tZSgoY29vcmQpID0+IGlzT2NjdXBpZWQoY29vcmQpKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkaW5hdGVUb0luZGV4KGNvb3JkKTtcbiAgICAgIGJvYXJkW3Jvd11bY29sXSA9IHNoaXA7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBbcm93LCBjb2xdID0gWy4uLmNvb3JkaW5hdGVUb0luZGV4KGNvb3JkaW5hdGUpXTtcbiAgICBpZiAoYm9hcmRbcm93XVtjb2xdKSB7XG4gICAgICBib2FyZFtyb3ddW2NvbF0uaGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbWlzc2VkQXR0YWNrcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgIHJldHVybiBjb29yZGluYXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV3MkRBcnJheShzaXplKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoc2l6ZSksICgpID0+IG5ldyBBcnJheShzaXplKS5maWxsKG51bGwpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGJvYXJkID0gbmV3MkRBcnJheShib2FyZFNpemUpO1xuICAgIG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXZlcnlTaGlwU3VuaygpIHtcbiAgICBsZXQgc2hpcHNTdW5rID0gdHJ1ZTtcbiAgICBib2FyZC5mb3JFYWNoKChyb3cpID0+XG4gICAgICByb3cuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBpZiAoc2hpcCAhPT0gbnVsbCAmJiAhc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgIHNoaXBzU3VuayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICAgIHJldHVybiBzaGlwc1N1bms7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHJlc2V0LFxuICAgIGlzRXZlcnlTaGlwU3VuayxcbiAgICBpbmRleFRvQ29vcmRpbmF0ZSxcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgICBnZXQgbWlzc2VkQXR0YWNrcygpIHtcbiAgICAgIHJldHVybiBtaXNzZWRBdHRhY2tzO1xuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBQbGF5ZXIgPSAoaXNDb21wdXRlciA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGF0dGFja3NMaXN0ID0gbmV3IFNldCgpO1xuICBsZXQgYXZhaWxhYmxlTW92ZXNTZXQgPSBuZXcgU2V0KCk7XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVNb3Zlc1NldCgpIHtcbiAgICBjb25zdCBtb3Zlc1NldCA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gNjU7IGkgPD0gNzQ7IGkgKz0gMSkge1xuICAgICAgLy8gQS1KIHVuaWNvZGVcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqICs9IDEpIHtcbiAgICAgICAgbW92ZXNTZXQuYWRkKFN0cmluZy5mcm9tQ2hhckNvZGUoaSkgKyBqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1vdmVzU2V0O1xuICB9XG5cbiAgaWYgKGlzQ29tcHV0ZXIpIGF2YWlsYWJsZU1vdmVzU2V0ID0gZ2VuZXJhdGVNb3Zlc1NldCgpO1xuXG4gIGZ1bmN0aW9uIHJhbmRvbUF0dGFjaygpIHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVNb3Zlc1NldC5zaXplKTtcbiAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gQXJyYXkuZnJvbShhdmFpbGFibGVNb3Zlc1NldClbcmFuZG9tXTtcbiAgICBhdmFpbGFibGVNb3Zlc1NldC5kZWxldGUocmFuZG9tQ29vcmRpbmF0ZSk7XG4gICAgYXR0YWNrc0xpc3QuYWRkKHJhbmRvbUNvb3JkaW5hdGUpO1xuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgaXNDb21wdXRlcigpIHtcbiAgICAgIHJldHVybiBpc0NvbXB1dGVyO1xuICAgIH0sXG4gICAgZ2V0IGF0dGFja3NMaXN0KCkge1xuICAgICAgcmV0dXJuIGF0dGFja3NMaXN0O1xuICAgIH0sXG4gICAgcmFuZG9tQXR0YWNrLFxuICB9O1xufTtcblxuY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIoKTtcbiAgY29uc3QgcGxheWVyVHdvID0gUGxheWVyKHRydWUpO1xuICBjb25zdCBwbGF5ZXJPbmVCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IHBsYXllck9uZVNoaXBPbmUgPSBTaGlwKDUpO1xuICBjb25zdCBwbGF5ZXJPbmVTaGlwVHdvID0gU2hpcCgzKTtcbiAgY29uc3QgcGxheWVyT25lU2hpcFRocmVlID0gU2hpcCgyKTtcblxuICBjb25zdCBwbGF5ZXJUd29TaGlwT25lID0gU2hpcCg0KTtcbiAgY29uc3QgcGxheWVyVHdvU2hpcFR3byA9IFNoaXAoMSk7XG4gIGNvbnN0IHBsYXllclR3b1NoaXBUaHJlZSA9IFNoaXAoMik7XG5cbiAgY29uc3QgcGxheWVyT25lU2hpcFBvc2l0aW9ucyA9IFtcbiAgICBbJ0ExJywgJ0EyJywgJ0EzJywgJ0E0JywgJ0E1J10sXG4gICAgWydDMycsICdEMycsICdFMyddLFxuICAgIFsnSjInLCAnSjMnXSxcbiAgXTtcblxuICBjb25zdCBwbGF5ZXJUd29TaGlwUG9zaXRpb25zID0gW1xuICAgIFsnQjEnLCAnQjInLCAnQjMnLCAnQjQnXSxcbiAgICBbJ0Q1J10sXG4gICAgWydJNCcsICdJNSddLFxuICBdO1xuXG4gIHBsYXllck9uZUJvYXJkLnBsYWNlU2hpcChwbGF5ZXJPbmVTaGlwT25lLCBwbGF5ZXJPbmVTaGlwUG9zaXRpb25zWzBdKTtcbiAgcGxheWVyT25lQm9hcmQucGxhY2VTaGlwKHBsYXllck9uZVNoaXBUd28sIHBsYXllck9uZVNoaXBQb3NpdGlvbnNbMV0pO1xuICBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAocGxheWVyT25lU2hpcFRocmVlLCBwbGF5ZXJPbmVTaGlwUG9zaXRpb25zWzJdKTtcblxuICBwbGF5ZXJUd29Cb2FyZC5wbGFjZVNoaXAocGxheWVyVHdvU2hpcE9uZSwgcGxheWVyVHdvU2hpcFBvc2l0aW9uc1swXSk7XG4gIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChwbGF5ZXJUd29TaGlwVHdvLCBwbGF5ZXJUd29TaGlwUG9zaXRpb25zWzFdKTtcbiAgcGxheWVyVHdvQm9hcmQucGxhY2VTaGlwKHBsYXllclR3b1NoaXBUaHJlZSwgcGxheWVyVHdvU2hpcFBvc2l0aW9uc1syXSk7XG5cbiAgLy8gY29uc3QgcGxheVJvdW5kID0gKCkgPT4ge307XG59KSgpO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlbmRlckJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PlxuICAgICAgcm93LmZvckVhY2goKGNlbGwsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2VsbEJ1dHRvbi5kYXRhc2V0LmNvb3JkID0gYm9hcmQuaW5kZXhUb0Nvb3JkaW5hdGUocm93SW5kZXgsIGNvbEluZGV4KTtcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjZWxsLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG4gICAgcmV0dXJuIGJvYXJkRGl2O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyQm9hcmQsXG4gIH07XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgU2hpcCxcbiAgR2FtZWJvYXJkLFxuICBQbGF5ZXIsXG4gIGdhbWVDb250cm9sbGVyLFxuICBkaXNwbGF5Q29udHJvbGxlcixcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=