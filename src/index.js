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

  function placeShipRandomly(ship) {
    function hasValidCoordinates(coords) {
      return coords.every(
        (newCoord) => isValidCoordinate(newCoord) && !isOccupied(newCoord),
      );
    }

    function randomCoordinates(shipLength) {
      const randomRowIndex = Math.floor(Math.random() * boardSize);
      const randomColIndex = Math.floor(Math.random() * boardSize);
      const orientation = ['horizontal', 'vertical'];
      const verticalCoords = [];
      const horizontalCoords = [];
      const randomOrientation =
        orientation[Math.floor(Math.random() * orientation.length)];

      function generateCoords() {
        let index = shipLength <= 3 ? -1 : -2;
        let count = 0;
        for (index; index < shipLength && count < shipLength; index += 1) {
          verticalCoords.push(
            indexToCoordinate(randomRowIndex + index, randomColIndex),
          );
          horizontalCoords.push(
            indexToCoordinate(randomRowIndex, randomColIndex + index),
          );
          count += 1;
        }
      }

      if (!isOccupied(indexToCoordinate(randomRowIndex, randomColIndex))) {
        generateCoords(shipLength);
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

      return randomCoordinates(shipLength);
    }
    placeShip(ship, randomCoordinates(ship.length));
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
    playerTwoBoard.placeShipRandomly(playerTwoShipOne);
    playerTwoBoard.placeShipRandomly(playerTwoShipTwo);
    playerTwoBoard.placeShipRandomly(playerTwoShipThree);
    playerTwoBoard.placeShipRandomly(playerTwoShipFour);
    playerTwoBoard.placeShipRandomly(playerTwoShipFive);
    playerOneBoard.placeShipRandomly(playerOneShipOne);
    playerOneBoard.placeShipRandomly(playerOneShipTwo);
    playerOneBoard.placeShipRandomly(playerOneShipThree);
    playerOneBoard.placeShipRandomly(playerOneShipFour);
    playerOneBoard.placeShipRandomly(playerOneShipFive);
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
  const randomizeButton = document.querySelector('#randomizeButton');
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

  function togglePlayAgainButton() {
    if (playAgainButton.style.display === 'block') {
      playAgainButton.style.display = 'none';
    } else playAgainButton.style.display = 'block';
  }

  function clickHandlerCell(ev) {
    randomizeButton.disabled = true;
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

    if (gameController.gameOver) {
      displayWinner(gameController.winner);
      togglePlayAgainButton();
      Array.from(
        playerTwoBoardDiv.querySelector('.player-board').children,
      ).forEach((node) => {
        const childNode = node;
        childNode.disabled = true;
      });
    }
  }

  function resetPage() {
    playerOneBoardDiv.removeChild(playerOneBoardDiv.lastChild);
    playerTwoBoardDiv.removeChild(playerTwoBoardDiv.lastChild);
    resultsDiv.textContent = '';
    playerOneBoard = gameController.playerOneBoard;
    playerTwoBoard = gameController.playerTwoBoard;
    playerOneBoardDiv.appendChild(refreshBoard(playerOneBoard));
    playerTwoBoardDiv.appendChild(refreshBoard(playerTwoBoard, true));
  }

  function clickHandlerCellRandomizeButton() {
    gameController.reset();
    resetPage();
  }

  function clickHandlerPlayAgainButton() {
    gameController.reset();
    resetPage();
    togglePlayAgainButton();
    randomizeButton.disabled = false;
  }

  playerOneBoardDiv.appendChild(refreshBoard(playerOneBoard));
  playerTwoBoardDiv.appendChild(refreshBoard(playerTwoBoard, true));
  playAgainButton.addEventListener('click', () =>
    clickHandlerPlayAgainButton(),
  );
  randomizeButton.addEventListener('click', () =>
    clickHandlerCellRandomizeButton(),
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
