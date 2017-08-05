import React from 'react';

import './index.css';

export const TILE_TYPES = {
  empty: Symbol("empty"),
  snake: Symbol("snake")
};

const TILES_TO_ELEMENTS = {
  [TILE_TYPES.empty]: <div className="Tile Tile--empty"></div>,
  [TILE_TYPES.snake]: <div className="Tile Tile--snake"></div>
}

export default function Tile(props) {
  return TILES_TO_ELEMENTS[props.type];
}
