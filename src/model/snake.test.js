import {
  createInitialBoardState,
  deriveNextBoardState
} from './snake';

const MATRIX_SIZE = {rows: 30, cols: 30};

describe('createInitialBoardState', () => {
  it('returns a state with a 2-tile snake', () => {
    const state = createInitialBoardState(MATRIX_SIZE);

    expect(state.snake).toHaveLength(2);
  });

  it('returns a state with food', () => {
    const state = createInitialBoardState(MATRIX_SIZE);

    expect(state.food).toBeDefined();
  });
});

describe('deriveNextBoardState', () => {
  describe('when a snake head goes beyond the borders', () => {
    it('can rotate from top border to bottom border', () => {
      const boardState = {
        snake: [{row: 0, col: 0}],
        food: {row: 15, col: 15}
      };

      const newBoardState = deriveNextBoardState({
        direction: "up",
        state: boardState,
        matrixSize: MATRIX_SIZE
      })

      expect(newBoardState.snake).toEqual([{row: MATRIX_SIZE.rows - 1, col: 0}]);
    });

    it('can rotate from bottom border to top border', () => {
      const boardState = {
        snake: [{row: MATRIX_SIZE.rows - 1, col: 0}],
        food: {row: 15, col: 15}
      };

      const newBoardState = deriveNextBoardState({
        direction: "down",
        state: boardState,
        matrixSize: MATRIX_SIZE
      })

      expect(newBoardState.snake).toEqual([{row: 0, col: 0}]);
    });

    it('can rotate from left border to right border', () => {
      const boardState = {
        snake: [{row: 0, col: 0}],
        food: {row: 15, col: 15}
      };

      const newBoardState = deriveNextBoardState({
        direction: "left",
        state: boardState,
        matrixSize: MATRIX_SIZE
      })

      expect(newBoardState.snake).toEqual([{row: 0, col: MATRIX_SIZE.cols - 1}]);
    });

    it('can rotate from right border to left border', () => {
      const boardState = {
        snake: [{row: 0, col: MATRIX_SIZE.cols - 1}],
        food: {row: 15, col: 15}
      };

      const newBoardState = deriveNextBoardState({
        direction: "right",
        state: boardState,
        matrixSize: MATRIX_SIZE
      })

      expect(newBoardState.snake).toEqual([{row: 0, col: 0}]);
    });
  });
});
