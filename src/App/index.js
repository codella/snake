import React, { Component } from 'react';

import Board from '../Board';
import {
  tickHandler,
  keyDownHandler,
  createFoodFromSnake
} from './handlers';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    const snake = [
      { row: 15, col: 15 },
      { row: 15, col: 14 }
    ];

    this.state = {
      snake: snake,
      food: createFoodFromSnake(snake, {rows: 30, cols: 30}),
      direction: "right"
    };

    setInterval(tickHandler.bind(this), 150);
  }

  componentWillMount() {
    document.addEventListener("keydown", keyDownHandler.bind(this));
  }


  componentWillUnmount() {
    document.removeEventListener("keydown", keyDownHandler.bind(this));
  }

  render() {
    return <Board
      snake={this.state.snake}
      food={this.state.food}
    />
  }
}