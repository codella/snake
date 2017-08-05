import React, { PureComponent } from 'react';

import Board from '../Board';
import { TILE_TYPES } from '../Tile';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    const tiles = [...Array(30).keys()].map(() => Array(30).fill(TILE_TYPES.empty));
    tiles[15][12] = tiles[15][13] = tiles[15][14] = TILE_TYPES.snake;

    this.state = {
      tiles: tiles
    };

    setInterval(this.tick.bind(this), 200);
  }

  tick() {
    console.debug('tick...')
  }

  render() {
    return <Board tiles={this.state.tiles} />
  }
}