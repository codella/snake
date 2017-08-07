export function isCoordInArray({row, col}, array) {
  array.reduce((isContained, { row: rowInArray, col: colInArray }) => {
    if (isContained) {
      return true;
    }

    return row === rowInArray && col === colInArray
  }, false);
}

export function areCoordsEqual({row: firstRow, col: firstCol}, {row: secondRow, col: secondCol}) {
  return firstRow === secondRow && firstCol === secondCol;
}
