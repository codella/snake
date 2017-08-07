import React from 'react';
import PropTypes from 'prop-types';

import Tile, { TILE_TYPES } from '../Tile';
import './index.css';

function makeMatrix(rows, cols, initialValue) {
  return [...Array(rows).keys()].map(() => Array(cols).fill(initialValue));
}

export default function Board(props) {
  const tiles = makeMatrix(30, 30, TILE_TYPES.empty);
  
  props.snake.forEach(({row, col}) => tiles[row][col] = TILE_TYPES.snake);
  tiles[props.food.row][props.food.col] = TILE_TYPES.food;

  return (
    <div className="Board">
      {tiles.map((row, rowIndex) => {
        return row.map((tileType, columnIndex) => {
          const key = `${rowIndex}-${columnIndex}-${tileType.toString()}`;
          return <Tile key={key} type={tileType} />;
        })
      })}
    </div>
  );
};

const CoordType = PropTypes.shape({
  row: PropTypes.number,
  col: PropTypes.number
});

Board.propTypes = {
  snake: PropTypes.arrayOf(CoordType),
  food: CoordType
};
