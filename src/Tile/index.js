import React from 'react';
import classnames from 'classnames';

import './index.css';

export const TILE_TYPES = {
  empty: Symbol("empty"),
  snake: Symbol("snake"),
  food: Symbol("food")
};

const TILES_TO_CLASSNAME = {
  [TILE_TYPES.empty]: "Tile--empty",
  [TILE_TYPES.snake]: "Tile--snake",
  [TILE_TYPES.food]: "Tile--food",
}

export default function Tile(props) {
  const tileClassNames = classnames("Tile", TILES_TO_CLASSNAME[props.type]);

  return <div className={tileClassNames} />;
}
