import './index.css';

function Ship(size = null) {
  let length = size;
  let hitCounter = null;
  const id = Math.floor(Math.random() * Date.now());

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
    get id() {
      return id;
    },
    hit,
    isSunk,
  };
}

const Gameboard = () => {
  function new2DArray(size) {
    return Array.from(Array(size), () => new Array(size).fill(null));
  }

  const boardSize = 10;
  let board = new2DArray(boardSize);
  let missedAttacks = [];

  function coordinateToIndex(coordinate) {
    const row = coordinate[0].toUpperCase();
    const col = coordinate.substring(1);
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

  function placeShipRandomly(ship) {
    // const newShipCoordinates = new Array(ship.length).fill(null);
    placeShip(ship, randomCoordinates(ship.length));

    // function randomCloseCoord(coord) {
    //   const changeValue = [-1, 0, 1];
    //   const randomXIndex = Math.floor(Math.random() * changeValue.length);
    //   const randomYIndex = Math.floor(Math.random() * changeValue.length);
    //   const randomX = changeValue[randomXIndex];
    //   const randomY = changeValue[randomYIndex];

    //   let xCoord = Number(coord.substring(1)) + randomY;
    //   let yCoordCharCode = coord.charCodeAt(0) + randomX;
    //   const newCoord = String.fromCharCode(yCoordCharCode) + xCoord.toString();

    //   if (!isValidCoordinate(newCoord)) {
    //     if (isOccupied(newCoord)) {
    //     }
    //   }

    //   if (xCoord > 74) xCoord = 65;
    //   else if (xCoord < 65) xCoord = 74;
    //   if (yCoordCharCode > 74) yCoordCharCode = 65;
    //   else if (yCoordCharCode < 65) yCoordCharCode = 74;
    // }

    function randomCoordinates(shipLength) {
      const randomRowIndex = Math.floor(Math.random() * boardSize);
      const randomColIndex = Math.floor(Math.random() * boardSize);
      const orientation = ['horizontal', 'vertical'];
      const randomOrientation =
        orientation[Math.floor(Math.random() * orientation.length)];
      const coordinates = [];

      if (!isOccupied(indexToCoordinate(randomRowIndex, randomColIndex))) {
        const verticalCoords = [];
        const horizontalCoords = [];
        if (shipLength === 5) {
          verticalCoords.push(
            indexToCoordinate(randomRowIndex - 2, randomColIndex),
            indexToCoordinate(randomRowIndex - 1, randomColIndex),
            indexToCoordinate(randomRowIndex, randomColIndex),
            indexToCoordinate(randomRowIndex + 1, randomColIndex),
            indexToCoordinate(randomRowIndex + 2, randomColIndex),
          );
          horizontalCoords.push(
            indexToCoordinate(randomRowIndex, randomColIndex - 2),
            indexToCoordinate(randomRowIndex, randomColIndex - 1),
            indexToCoordinate(randomRowIndex, randomColIndex),
            indexToCoordinate(randomRowIndex, randomColIndex + 1),
            indexToCoordinate(randomRowIndex, randomColIndex + 2),
          );
          if (
            randomOrientation === 'vertical' &&
            hasValidCoordinates(verticalCoords)
          ) {
            return verticalCoords;
          }
          if (hasValidCoordinates(horizontalCoords)) {
            return horizontalCoords;
          }
          if (hasValidCoordinates(verticalCoords)) {
            return verticalCoords;
          }
        }
      }
      return randomCoordinates(shipLength);
      function hasValidCoordinates(coords) {
        return coords.every((newCoord) => isValidCoordinate(newCoord));
      }
    }
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
    coordinateToIndex,
    placeShipRandomly,
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
  let activePlayer = false;

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
    get activePlayer() {
      return activePlayer;
    },
    set activePlayer(activeFlag) {
      activePlayer = activeFlag;
    },
    randomAttack,
  };
};

const gameController = (() => {
  let playerOne;
  let playerTwo;
  let playerOneBoard;
  let playerTwoBoard;
  let gameOver;
  let winner;

  let playerOneShipOne;
  let playerOneShipTwo;
  let playerOneShipThree;
  let playerOneShipFour;
  let playerOneShipFive;

  let playerTwoShipOne;
  let playerTwoShipTwo;
  let playerTwoShipThree;
  let playerTwoShipFour;
  let playerTwoShipFive;

  const playerOneShipPositions = [
    ['A1', 'A2', 'A3', 'A4', 'A5'],
    ['B7', 'C7', 'D7', 'E7'],
    ['C3', 'D3', 'E3'],
    ['G8', 'G9', 'G10'],
    ['J2', 'J3'],
  ];

  const playerTwoShipPositions = [
    ['B1', 'B2', 'B3', 'B4', 'B5'],
    ['E2', 'F2', 'G2', 'H2'],
    ['F8', 'F9', 'F10'],
    ['A9', 'B9', 'C9'],
    ['I4', 'I5'],
  ];

  const playRound = (attackCoord, playerTwoTurn = false) => {
    let randomAttackCoord = null;
    if (!gameOver) {
      if (!playerTwoTurn) {
        playerTwoBoard.receiveAttack(attackCoord);
      } else {
        randomAttackCoord = playerTwo.randomAttack();
        playerOneBoard.receiveAttack(randomAttackCoord);
      }
      if (playerOneBoard.isEveryShipSunk()) {
        winner = playerTwo;
        gameOver = true;
      } else if (playerTwoBoard.isEveryShipSunk()) {
        winner = playerOne;
        gameOver = true;
      }
    }
    return randomAttackCoord;
  };

  const reset = () => {
    playerOne = Player();
    playerTwo = Player(true);
    playerOneBoard = Gameboard();
    playerTwoBoard = Gameboard();
    gameOver = false;
    winner = null;
    playerOneShipOne = Ship(5);
    playerOneShipTwo = Ship(4);
    playerOneShipThree = Ship(3);
    playerOneShipFour = Ship(3);
    playerOneShipFive = Ship(2);
    playerTwoShipOne = Ship(5);
    playerTwoShipTwo = Ship(4);
    playerTwoShipThree = Ship(3);
    playerTwoShipFour = Ship(3);
    playerTwoShipFive = Ship(2);
    // playerOneBoard.placeShip(playerOneShipOne, playerOneShipPositions[0]);
    // playerOneBoard.placeShip(playerOneShipTwo, playerOneShipPositions[1]);
    // playerOneBoard.placeShip(playerOneShipThree, playerOneShipPositions[2]);
    // playerOneBoard.placeShip(playerOneShipFour, playerOneShipPositions[3]);
    // playerOneBoard.placeShip(playerOneShipFive, playerOneShipPositions[4]);
    playerTwoBoard.placeShip(playerTwoShipOne, playerTwoShipPositions[0]);
    playerTwoBoard.placeShip(playerTwoShipTwo, playerTwoShipPositions[1]);
    playerTwoBoard.placeShip(playerTwoShipThree, playerTwoShipPositions[2]);
    playerTwoBoard.placeShip(playerTwoShipFour, playerTwoShipPositions[3]);
    playerTwoBoard.placeShip(playerTwoShipFive, playerTwoShipPositions[4]);
    playerOneBoard.placeShipRandomly(playerOneShipOne);
  };

  reset();

  return {
    get playerOneBoard() {
      return playerOneBoard;
    },
    get playerTwoBoard() {
      return playerTwoBoard;
    },
    get gameOver() {
      return gameOver;
    },
    get winner() {
      return winner;
    },
    get playerOne() {
      return playerOne;
    },
    get playerTwo() {
      return playerTwo;
    },
    playRound,
    reset,
  };
})();

const displayController = (() => {
  const playerOneBoardDiv = document.querySelector('#playerOneBoard');
  const playerTwoBoardDiv = document.querySelector('#playerTwoBoard');
  const resultsDiv = document.querySelector('#resultsBoard');
  let { playerOneBoard, playerTwoBoard } = gameController;
  const playAgainButton = document.createElement('button');
  playAgainButton.textContent = 'Play Again';
  playAgainButton.classList.add('play-again-btn');

  const refreshBoard = (playerBoard, isComputer = false) => {
    const boardDiv = document.createElement('div');
    const { board } = playerBoard;
    let initAlphaCharCode = 63;

    function nextChar(charCode) {
      return String.fromCharCode(charCode + 1);
    }

    function newLabelDiv(charCode, isNum = false) {
      const labelDiv = document.createElement('div');
      labelDiv.classList.add('board-label');
      if (isNum) {
        labelDiv.textContent = charCode;
      } else {
        labelDiv.textContent = nextChar(charCode);
      }
      return labelDiv;
    }

    board.forEach((row, rowIndex) =>
      row.forEach((cell, colIndex) => {
        const cellButton = document.createElement('button');
        const coordinates = playerBoard.indexToCoordinate(rowIndex, colIndex);
        cellButton.dataset.coord = coordinates;
        cellButton.classList.add('battlefield-cell');
        if (!isComputer) {
          cellButton.disabled = true;
          cellButton.classList.add('player');
          if (cell) {
            cellButton.classList.add('ship-box');
          }
        }
        cellButton.addEventListener('click', (ev) => clickHandlerCell(ev));

        boardDiv.classList.add('player-board');

        // add alphabetic row labels to the left side of board
        if (colIndex % 10 === 0) {
          boardDiv.appendChild(newLabelDiv((initAlphaCharCode += 1)));
        }

        boardDiv.appendChild(cellButton);
      }),
    );

    // add numeric column labels under the board
    boardDiv.appendChild(newLabelDiv(-1));
    for (let i = 1; i <= 10; i += 1) {
      boardDiv.appendChild(newLabelDiv(i, true));
    }

    return boardDiv;
  };

  function clickHandlerCell(ev) {
    const selectedCell = ev.target;
    const selectedCellCoordinates = selectedCell.dataset.coord;
    const [row, col] = playerOneBoard.coordinateToIndex(
      selectedCellCoordinates,
    );
    gameController.playRound(selectedCellCoordinates);
    if (playerTwoBoard.board[row][col]) {
      selectedCell.classList.add('hit');
    } else {
      selectedCell.classList.add('miss');
    }

    const playerOneAttackCooord = gameController.playRound(undefined, true);
    if (playerOneAttackCooord) {
      const playerOneAttackCell = document.querySelector(
        `[data-coord="${playerOneAttackCooord}"]`,
      );
      const [playerOneRow, playerOneCol] = playerOneBoard.coordinateToIndex(
        playerOneAttackCooord,
      );
      playerOneAttackCell.disabled = false;

      if (playerOneBoard.board[playerOneRow][playerOneCol]) {
        playerOneAttackCell.classList.add('hit');
      } else {
        playerOneAttackCell.classList.add('miss');
      }
      selectedCell.disabled = true;
      playerOneAttackCell.disabled = true;
    }

    if (gameController.gameOver) {
      displayWinner(gameController.winner);
      togglePlayAgainButton();
      Array.from(
        playerTwoBoardDiv.querySelector('.player-board').children,
      ).forEach((childNode) => {
        childNode.disabled = true;
      });
    }
  }

  function togglePlayAgainButton() {
    if (playAgainButton.style.display === 'block') {
      playAgainButton.style.display = 'none';
    } else playAgainButton.style.display = 'block';
  }

  function resetPage() {
    playerOneBoardDiv.removeChild(playerOneBoardDiv.lastChild);
    playerTwoBoardDiv.removeChild(playerTwoBoardDiv.lastChild);
    resultsDiv.textContent = '';
    togglePlayAgainButton();
    playerOneBoard = gameController.playerOneBoard;
    playerTwoBoard = gameController.playerTwoBoard;
    playerOneBoardDiv.appendChild(refreshBoard(playerOneBoard));
    playerTwoBoardDiv.appendChild(refreshBoard(playerTwoBoard, true));
  }

  function clickHandlerPlayAgainButton() {
    gameController.reset();
    resetPage();
  }

  function displayWinner(winningPlayer) {
    if (winningPlayer === gameController.playerOne) {
      resultsDiv.textContent = 'You Win!';
      resultsDiv.classList.add('winner');
      resultsDiv.classList.remove('loser');
    } else {
      resultsDiv.textContent = 'You Lose';
      resultsDiv.classList.add('loser');
      resultsDiv.classList.remove('winner');
    }
  }

  playerOneBoardDiv.appendChild(refreshBoard(playerOneBoard));
  playerTwoBoardDiv.appendChild(refreshBoard(playerTwoBoard, true));
  playAgainButton.addEventListener('click', () =>
    clickHandlerPlayAgainButton(),
  );
  document.querySelector('#content').append(playAgainButton);
})();

const funcs = {
  Ship,
  Gameboard,
  Player,
  gameController,
  displayController,
};

export default funcs;
