import React, { Component } from 'react';

import Board from '../Board';

function calculateNextHead(currentHead, direction, rows, cols) {
  const directionToNextHeadOperation = {
    up: ({row, col}) => ({ row: (row || rows) - 1, col: col }),
    down: ({row, col}) => ({ row: (row + 1) % rows, col: col }),
    left: ({row, col}) => ({ row: row, col: (col || cols) - 1}),
    right: ({row, col}) => ({ row: row, col: (col + 1) % cols })
  };

  return directionToNextHeadOperation[direction](currentHead);
}

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      snake: [
        { row: 15, col: 15 },
        { row: 15, col: 14 }
      ],
      food: [],
      direction: "right"
    };

    setInterval(this.tick.bind(this), 150);
  }

  tick() {
    const nextSnake = [...this.state.snake];
    nextSnake.pop(); // remove the tail
    const currentHead = nextSnake[0];
    const nextHead = calculateNextHead(
      currentHead,
      this.state.direction,
      30,
      30
    );
    nextSnake.unshift(nextHead);

    this.setState({ snake: nextSnake });
  }

  handleKeyDown(event) {
    const keyToDirection = {
      ArrowUp: "up",
      ArrowDown: "down",
      ArrowLeft: 'left',
      ArrowRight: "right"
    };

    const direction = keyToDirection[event.key];

    if (direction !== undefined) {
      this.setState({ direction: direction });
    }
  }

  componentWillMount() {
    document.addEventListener(
      "keydown",
      this.handleKeyDown.bind(this)
    );
  }


  componentWillUnmount() {
    document.removeEventListener(
      "keydown",
      this.handleKeyDown.bind(this)
    );
  }

  render() {
    return <Board
      snake={this.state.snake}
      food={this.state.food}
    />
  }
}