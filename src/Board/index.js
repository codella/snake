import React from 'react';

import Tile, { TILE_TYPES } from '../Tile';
import './index.css';

function makeMatrix(rows, cols, initialValue) {
  return [...Array(rows).keys()].map(() => Array(cols).fill(initialValue));
}

export default function Board(props) {
  const tiles = makeMatrix(30, 30, TILE_TYPES.empty);
  
  props.snake.forEach(({row, col}) => tiles[row][col] = TILE_TYPES.snake);
  props.food.forEach(({row, col}) => tiles[row][col] = TILE_TYPES.food);

  return (
    <div className="Board">
      {tiles.map((row) => {
        return row.map((tileType) => {
          return <Tile type={tileType} />;
        })
      })}
    </div>
  );
};
