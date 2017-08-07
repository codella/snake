const directionToNextHeadCalculator = {
  up: ({row, col}, {rows, cols}) => ({ row: (row || rows) - 1, col: col }),
  down: ({row, col}, {rows, cols}) => ({ row: (row + 1) % rows, col: col }),
  left: ({row, col}, {rows, cols}) => ({ row: row, col: (col || cols) - 1}),
  right: ({row, col}, {rows, cols}) => ({ row: row, col: (col + 1) % cols })
};

function deriveNextHead({currentHead, direction, matrixSize}) {
  return directionToNextHeadCalculator[direction](currentHead, matrixSize);
}

function isCoordInArray({row, col}, array) {
  array.reduce((isContained, { row: rowInArray, col: colInArray }) => {
    if (isContained) {
      return true;
    }

    return row === rowInArray && col === colInArray
  }, false);
}

function createFoodFromSnake(snake, {rows, cols}) {
  const freeTiles = [];
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (! isCoordInArray({ row, col }, snake)) {
        freeTiles.push({row, col});
      }
    }
  }

  const randomIndex = Math.floor(Math.random() * freeTiles.length)
  return freeTiles[randomIndex];
}

function areCoordEqual({row: firstRow, col: firstCol}, {row: secondRow, col: secondCol}) {
  return firstRow === secondRow && firstCol === secondCol;
}

export function createInitialBoardState(matrixSize) {
  const snake = [
    {row: 15, col: 15},
    {row: 15, col: 14}
  ];

  const food = createFoodFromSnake(snake, matrixSize);

  return {snake, food};
}

export function deriveNextBoardState({state, direction, matrixSize}) {
  const nextSnake = [...state.snake];
  const currentHead = state.snake[0];
  const nextHead = deriveNextHead({
    currentHead: currentHead,
    direction: direction,
    matrixSize: matrixSize
  });

  nextSnake.unshift(nextHead);

  const nextState = {snake: nextSnake, food: state.food};
  if (! areCoordEqual(state.food, nextHead)) {
    nextSnake.pop();
  } else {
    nextState.food = createFoodFromSnake(nextSnake, matrixSize);
  }

  return nextState;
}