import React, { Component } from 'react';
import './Board.css';

const TILE_TYPES = {
  empty: Symbol("empty"),
  snake: Symbol("snake")
}

const TILES_TO_ELEMENTS = {
  [TILE_TYPES.empty]: <div className="Tile Tile--empty"></div>,
  [TILE_TYPES.snake]: <div className="Tile Tile--snake"></div>
}

class Board extends Component {
  constructor(props) {
    super(props);

    const tiles = [...Array(30).keys()].map(() => Array(30).fill(TILE_TYPES.empty));
    tiles[15][12] = tiles[15][13] = tiles[15][14] = TILE_TYPES.snake;

    this.state = {
      tiles: tiles
    }

    setInterval(this.tickHandler.bind(this), 200)
  }

  tickHandler() {

  }

  render() {
    return (
      <div className="Board">
        {this.state.tiles.map((row) => {
          return row.map((tile) => {
            return TILES_TO_ELEMENTS[tile];
          })
        })}
      </div>
    );
  }
}

export default Board;
