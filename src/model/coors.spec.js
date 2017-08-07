import {
  isCoordInArray,
  areCoordsEqual
} from './coords';

describe('isCoordInArray', () => {
  it('can tell when coors are equal', () => {
    const aCoord = {row: 1, col: 1};
    const anEqualCoord = {row: 1, col: 1};

    expect(areCoordsEqual(aCoord, anEqualCoord)).toBeTruthy();
  });
});

describe('areCoordsEqual', () => {
  it('can tell when coors are not equal', () => {
    const aCoord = {row: 1, col: 1};
    const aDifferentCoord = {row: 2, col: 2};

    expect(areCoordsEqual(aCoord, aDifferentCoord)).toBeFalsy();
  });
});