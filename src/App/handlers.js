const directionToNextHeadCalculator = {
  up: ({row, col}, {rows, cols}) => ({ row: (row || rows) - 1, col: col }),
  down: ({row, col}, {rows, cols}) => ({ row: (row + 1) % rows, col: col }),
  left: ({row, col}, {rows, cols}) => ({ row: row, col: (col || cols) - 1}),
  right: ({row, col}, {rows, cols}) => ({ row: row, col: (col + 1) % cols })
};

function isCoordInArray({row, col}, array) {
  array.reduce((isContained, { row: rowInArray, col: colInArray }) => {
    if (isContained) {
      return true;
    }

    return row === rowInArray && col === colInArray
  }, false);
}

export function createFoodFromSnake(snake, {rows, cols}) {
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

export function tickHandler() {
  const nextSnake = [...this.state.snake];
  const currentHead = this.state.snake[0];
  const nextHeadCalculator = directionToNextHeadCalculator[this.state.direction];
  const nextHead = nextHeadCalculator(currentHead, {rows: 30, cols: 30});
  nextSnake.unshift(nextHead);

  const nextState = {snake: nextSnake};
  if (! areCoordEqual(this.state.food, nextHead)) {
    nextSnake.pop();
  } else {
    nextState.food = createFoodFromSnake(nextSnake, {rows: 30, cols: 30});
  }

  this.setState(nextState);
}

const KEY_TO_DIRECTION = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: 'left',
  ArrowRight: "right"
};

export function keyDownHandler(event) {
  const direction = KEY_TO_DIRECTION[event.key];

  if (direction !== undefined) {
    this.setState({ direction: direction });
  }
}