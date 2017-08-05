import React from 'react';

import Tile from '../Tile';
import './index.css';

export default function Board(props) {
  return (
    <div className="Board">
      {props.tiles.map((row) => {
        return row.map((tileType) => {
          return <Tile type={tileType} />;
        })
      })}
    </div>
  );
};
