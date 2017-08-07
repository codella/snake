import React from 'react';
import ReactDOM from 'react-dom';
import Tile, {TILE_TYPES} from './';

it('renders an empty tile without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Tile type={TILE_TYPES.empty} />, div);
});

it('renders a snake tile without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Tile type={TILE_TYPES.snake} />, div);
});

it('renders a food tile without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Tile type={TILE_TYPES.food} />, div);
});
