import React from 'react';
import ReactDOM from 'react-dom';
import Board from './';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const snake = [];
  const food = {row: 8, col: 8};
  ReactDOM.render(<Board snake={snake} food={food} />, div);
});
